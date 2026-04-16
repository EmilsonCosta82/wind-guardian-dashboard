import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import type { FaultEntry } from "@/data/protectionMatrix";

const severityLabel = (s: string) =>
  s === "critical" ? "Crítico" : s === "high" ? "Alto" : s === "medium" ? "Médio" : "Baixo";

export function exportToPDF(faults: FaultEntry[]) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Matriz de Proteção — GWH171 6.0MW", 14, 15);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(`Serra da Palmeira — Gerado em ${new Date().toLocaleDateString("pt-BR")} — ${faults.length} registro(s)`, 14, 21);

  // Table
  autoTable(doc, {
    startY: 26,
    head: [["Código", "Subsistema", "Componente", "Descrição da Falha", "Severidade", "Nível Parada", "SC", "Impacto no Sistema"]],
    body: faults.map(f => [
      f.faultCode,
      f.subsystem,
      f.component,
      f.faultDescription,
      severityLabel(f.severity),
      f.stopLevel,
      f.safetyChainTriggered ? "Sim" : "Não",
      f.systemImpact,
    ]),
    styles: { fontSize: 7, cellPadding: 1.5 },
    headStyles: { fillColor: [30, 58, 95], fontSize: 7 },
    columnStyles: {
      0: { cellWidth: 18 },
      4: { cellWidth: 16 },
      5: { cellWidth: 20 },
      6: { cellWidth: 10 },
    },
    didParseCell(data) {
      if (data.section === "body" && data.column.index === 4) {
        const val = data.cell.raw as string;
        if (val === "Crítico") data.cell.styles.textColor = [220, 38, 38];
        else if (val === "Alto") data.cell.styles.textColor = [234, 88, 12];
      }
    },
  });

  // Corrective actions page
  doc.addPage();
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Ações Corretivas Detalhadas", 14, 15);

  let y = 22;
  for (const f of faults) {
    if (y > 180) { doc.addPage(); y = 15; }
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(`${f.faultCode} — ${f.faultDescription}`, 14, y);
    y += 4;
    doc.setFont("helvetica", "normal");
    for (const a of f.correctiveActions) {
      if (y > 190) { doc.addPage(); y = 15; }
      doc.setFontSize(7);
      doc.text(`  ${a.step}. ${a.action} (${a.responsible} — ${a.timeEstimate})`, 16, y);
      y += 3.5;
    }
    y += 2;
  }

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setFont("helvetica", "italic");
    doc.text(`Página ${i}/${totalPages}`, pageW - 30, doc.internal.pageSize.getHeight() - 6);
    doc.text("Documento de uso interno — O&M Serra da Palmeira", 14, doc.internal.pageSize.getHeight() - 6);
  }

  doc.save("Matriz_Protecao_GWH171.pdf");
}

export function exportToExcel(faults: FaultEntry[]) {
  const mainData = faults.map(f => ({
    "Código": f.faultCode,
    "Subsistema": f.subsystem,
    "Componente": f.component,
    "Descrição da Falha": f.faultDescription,
    "Severidade": severityLabel(f.severity),
    "Nível de Parada": f.stopLevel,
    "Nível de Reset": f.resetLevel,
    "Safety Chain": f.safetyChainTriggered ? "Sim" : "Não",
    "Impacto no Sistema": f.systemImpact,
    "Sistemas Afetados": f.affectedSystems.join(", "),
  }));

  const actionsData = faults.flatMap(f =>
    f.correctiveActions.map(a => ({
      "Código Falha": f.faultCode,
      "Descrição": f.faultDescription,
      "Passo": a.step,
      "Ação Corretiva": a.action,
      "Responsável": a.responsible,
      "Tempo Estimado": a.timeEstimate,
    }))
  );

  const wb = XLSX.utils.book_new();

  const ws1 = XLSX.utils.json_to_sheet(mainData);
  ws1["!cols"] = [
    { wch: 14 }, { wch: 22 }, { wch: 22 }, { wch: 45 },
    { wch: 12 }, { wch: 18 }, { wch: 18 }, { wch: 10 },
    { wch: 50 }, { wch: 35 },
  ];
  XLSX.utils.book_append_sheet(wb, ws1, "Matriz de Proteção");

  const ws2 = XLSX.utils.json_to_sheet(actionsData);
  ws2["!cols"] = [
    { wch: 14 }, { wch: 40 }, { wch: 6 }, { wch: 55 }, { wch: 20 }, { wch: 15 },
  ];
  XLSX.utils.book_append_sheet(wb, ws2, "Ações Corretivas");

  XLSX.writeFile(wb, "Matriz_Protecao_GWH171.xlsx");
}
