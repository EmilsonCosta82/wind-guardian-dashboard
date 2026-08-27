import { useState, useMemo } from "react";
import { Search, Filter, Shield, FileDown, FileSpreadsheet, ChevronLeft, ChevronRight, Pencil, RotateCcw } from "lucide-react";
import { faultEntries, type FaultEntry, type Severity } from "@/data/protectionMatrix";
import SeverityBadge from "@/components/SeverityBadge";
import FaultDetailDialog from "@/components/FaultDetailDialog";
import { Button } from "@/components/ui/button";
import { exportToPDF, exportToExcel } from "@/lib/exportProtectionMatrix";
import { useFaultOverrides, getMergedEntries } from "@/hooks/useFaultOverrides";

const severityOptions: Severity[] = ["critical", "high", "medium", "low"];
const subsystemOptions = [...new Set(faultEntries.map(f => f.subsystem))].sort();
const PAGE_SIZE = 50;

export default function ProtectionMatrix() {
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState<Severity | "all">("all");
  const [subsystemFilter, setSubsystemFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const { overrides, editedCount, saveFault, resetFault, resetAll } = useFaultOverrides();

  const entries = useMemo(() => getMergedEntries(overrides), [overrides]);

  const filtered = useMemo(() => {
    setPage(1);
    return entries.filter(f => {
      const matchSearch = search === "" || [f.faultCode, f.faultDescription, f.faultDescriptionEn, f.component, f.subsystem]
        .some(s => s.toLowerCase().includes(search.toLowerCase()));
      const matchSeverity = severityFilter === "all" || f.severity === severityFilter;
      const matchSubsystem = subsystemFilter === "all" || f.subsystem === subsystemFilter;
      return matchSearch && matchSeverity && matchSubsystem;
    });
  }, [entries, search, severityFilter, subsystemFilter]);

  const selectedFault: FaultEntry | null = useMemo(
    () => (selectedId === null ? null : entries.find(f => f.id === selectedId) ?? null),
    [entries, selectedId],
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);


  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold">Matriz de Proteção</h2>
        <p className="text-sm text-muted-foreground">Catálogo completo de falhas, impactos e ações corretivas do WTG GWH171 6.0MW — {faultEntries.length} registros totais</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por código, descrição, componente..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={severityFilter}
            onChange={e => setSeverityFilter(e.target.value as Severity | "all")}
            className="text-sm rounded-lg border border-input bg-card px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">Todas Severidades</option>
            {severityOptions.map(s => (
              <option key={s} value={s}>{s === "critical" ? "Crítico" : s === "high" ? "Alto" : s === "medium" ? "Médio" : "Baixo"}</option>
            ))}
          </select>
          <select
            value={subsystemFilter}
            onChange={e => setSubsystemFilter(e.target.value)}
            className="text-sm rounded-lg border border-input bg-card px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">Todos Subsistemas ({subsystemOptions.length})</option>
            {subsystemOptions.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <span className="text-xs text-muted-foreground">{filtered.length} registro(s)</span>
        {editedCount > 0 && (
          <span className="status-badge bg-warning/15 text-warning">
            <Pencil className="h-3 w-3" /> {editedCount} editado(s)
          </span>
        )}
        <div className="flex gap-2 ml-auto">
          {editedCount > 0 && (
            <Button variant="ghost" size="sm" onClick={resetAll}>
              <RotateCcw className="h-4 w-4 mr-1" /> Restaurar tudo
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={() => exportToPDF(filtered)}>
            <FileDown className="h-4 w-4 mr-1" /> PDF
          </Button>
          <Button variant="outline" size="sm" onClick={() => exportToExcel(filtered)}>
            <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
          </Button>
        </div>
      </div>


      {/* Table */}
      <div className="bg-card rounded-xl border border-border/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="table-header">
                <th className="text-left px-4 py-3 w-28">Código</th>
                <th className="text-left px-4 py-3">Subsistema</th>
                <th className="text-left px-4 py-3">Descrição (PT)</th>
                <th className="text-left px-4 py-3">Description (EN)</th>
                <th className="text-left px-4 py-3 w-24">Severidade</th>
                <th className="text-left px-4 py-3">Nível de Parada</th>
                <th className="text-left px-4 py-3 w-16">SC</th>
              </tr>
            </thead>
            <tbody>
              {paged.map(fault => (
                <tr
                  key={fault.id}
                  className="border-b border-border/40 hover:bg-muted/30 cursor-pointer transition-colors"
                  onClick={() => setSelectedFault(fault)}
                >
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">{fault.faultCode}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      <span>{fault.subsystemIcon}</span>
                      <span className="text-xs">{fault.subsystem}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs max-w-[200px] truncate">{fault.faultDescription}</td>
                  <td className="px-4 py-3 text-xs max-w-[200px] truncate text-muted-foreground">{fault.faultDescriptionEn}</td>
                  <td className="px-4 py-3"><SeverityBadge severity={fault.severity} /></td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{fault.stopLevel}</td>
                  <td className="px-4 py-3">
                    {fault.safetyChainTriggered && <Shield className="h-4 w-4 text-destructive" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-border/40">
            <span className="text-xs text-muted-foreground">
              Mostrando {(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, filtered.length)} de {filtered.length}
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">{page} / {totalPages}</span>
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <FaultDetailDialog fault={selectedFault} open={!!selectedFault} onOpenChange={o => !o && setSelectedFault(null)} />
    </div>
  );
}
