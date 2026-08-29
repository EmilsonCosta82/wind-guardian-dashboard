import { Shield, AlertTriangle, AlertOctagon, Activity, Layers, Link2 } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import KPICard from "@/components/KPICard";
import { getStats, subsystems } from "@/data/protectionMatrix";
import parqueFundoAsset from "@/assets/parque-fundo-severidade.png.asset.json";


const stats = getStats();

const severityData = [
  { name: "Crítico", value: stats.critical, color: "hsl(0, 72%, 51%)" },
  { name: "Alto", value: stats.high, color: "hsl(38, 92%, 50%)" },
  { name: "Médio", value: stats.medium, color: "hsl(199, 89%, 48%)" },
  { name: "Baixo", value: stats.low, color: "hsl(142, 71%, 45%)" },
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Visão geral do Painel de Falhas e Alarmes - Parque Eólico Serra da Palmeira</p>
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
        <div className="kpi-card relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${parqueFundoAsset.url})`, opacity: 0.18 }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-background/30" aria-hidden="true" />
          <div className="relative">
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

    </div>
  );
}
