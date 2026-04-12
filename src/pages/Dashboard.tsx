import { Shield, AlertTriangle, AlertOctagon, Activity, Layers, Link2 } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import KPICard from "@/components/KPICard";
import SeverityBadge from "@/components/SeverityBadge";
import { faultEntries, getStats, subsystems } from "@/data/protectionMatrix";
import { useState } from "react";
import FaultDetailDialog from "@/components/FaultDetailDialog";
import type { FaultEntry } from "@/data/protectionMatrix";

const stats = getStats();

const severityData = [
  { name: "Crítico", value: stats.critical, color: "hsl(0, 72%, 51%)" },
  { name: "Alto", value: stats.high, color: "hsl(38, 92%, 50%)" },
  { name: "Médio", value: stats.medium, color: "hsl(199, 89%, 48%)" },
];

const subsystemChartData = subsystems
  .map(s => ({
    name: s.name.replace("Sistema ", "").replace("Caixa de ", ""),
    total: s.totalFaults,
    critical: s.criticalFaults,
  }))
  .sort((a, b) => b.total - a.total)
  .slice(0, 8);

export default function Dashboard() {
  const [selectedFault, setSelectedFault] = useState<FaultEntry | null>(null);
  const recentCritical = faultEntries.filter(f => f.severity === "critical").slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Visão geral da Matriz de Proteção - Parque Eólico Serra da Palmeira</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <KPICard title="Total de Falhas" value={stats.total} subtitle="Catalogadas" icon={Layers} color="primary" />
        <KPICard title="Críticas" value={stats.critical} subtitle="Parada imediata" icon={AlertOctagon} color="destructive" />
        <KPICard title="Alta Severidade" value={stats.high} subtitle="Parada normal" icon={AlertTriangle} color="warning" />
        <KPICard title="Média Severidade" value={stats.medium} subtitle="Alarme" icon={Activity} color="info" />
        <KPICard title="Safety Chain" value={stats.safetyChain} subtitle="Acionam cadeia" icon={Shield} color="destructive" />
        <KPICard title="Subsistemas" value={stats.subsystemCount} subtitle="Monitorados" icon={Link2} color="success" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Severity Pie */}
        <div className="kpi-card">
          <h3 className="text-sm font-semibold mb-4">Distribuição por Severidade</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={severityData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={4}>
                {severityData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {severityData.map(s => (
              <div key={s.name} className="flex items-center gap-1.5 text-xs">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} ({s.value})
              </div>
            ))}
          </div>
        </div>

        {/* Subsystem Bar */}
        <div className="kpi-card lg:col-span-2">
          <h3 className="text-sm font-semibold mb-4">Falhas por Subsistema</h3>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={subsystemChartData} margin={{ left: 0, right: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="total" fill="hsl(210, 100%, 45%)" radius={[4, 4, 0, 0]} name="Total" />
              <Bar dataKey="critical" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} name="Críticas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Critical Faults Table */}
      <div className="kpi-card overflow-hidden p-0">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold">Falhas Críticas - Ação Imediata Necessária</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="table-header">
                <th className="text-left px-5 py-3">Código</th>
                <th className="text-left px-5 py-3">Subsistema</th>
                <th className="text-left px-5 py-3">Componente</th>
                <th className="text-left px-5 py-3">Descrição</th>
                <th className="text-left px-5 py-3">Severidade</th>
                <th className="text-left px-5 py-3">Safety Chain</th>
              </tr>
            </thead>
            <tbody>
              {recentCritical.map(fault => (
                <tr
                  key={fault.id}
                  className="border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors"
                  onClick={() => setSelectedFault(fault)}
                >
                  <td className="px-5 py-3 font-mono text-xs font-semibold text-primary">{fault.faultCode}</td>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-2">
                      <span>{fault.subsystemIcon}</span>
                      <span>{fault.subsystem}</span>
                    </span>
                  </td>
                  <td className="px-5 py-3">{fault.component}</td>
                  <td className="px-5 py-3 max-w-xs truncate">{fault.faultDescription}</td>
                  <td className="px-5 py-3"><SeverityBadge severity={fault.severity} /></td>
                  <td className="px-5 py-3">
                    {fault.safetyChainTriggered ? (
                      <span className="status-badge bg-destructive/15 text-destructive text-[10px]">
                        <Shield className="h-3 w-3" /> Sim
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-xs">Não</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FaultDetailDialog fault={selectedFault} open={!!selectedFault} onOpenChange={o => !o && setSelectedFault(null)} />
    </div>
  );
}
