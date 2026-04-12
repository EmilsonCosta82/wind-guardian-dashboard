import { faultEntries } from "@/data/protectionMatrix";
import { useMemo } from "react";

interface Connection {
  from: string;
  to: string;
  weight: number;
}

export default function Interconnections() {
  const connections = useMemo(() => {
    const map = new Map<string, number>();
    faultEntries.forEach(f => {
      f.affectedSystems.forEach(affected => {
        const key = [f.subsystem, affected].sort().join("→");
        map.set(key, (map.get(key) || 0) + 1);
      });
    });
    const result: Connection[] = [];
    map.forEach((weight, key) => {
      const [from, to] = key.split("→");
      result.push({ from, to, weight });
    });
    return result.sort((a, b) => b.weight - a.weight);
  }, []);

  const uniqueSystems = [...new Set(connections.flatMap(c => [c.from, c.to]))];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold">Interligações entre Subsistemas</h2>
        <p className="text-sm text-muted-foreground">Mapa de dependências e impacto cruzado entre os subsistemas do WTG</p>
      </div>

      {/* Connection Matrix */}
      <div className="kpi-card overflow-hidden p-0">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold">Matriz de Impacto Cruzado</h3>
          <p className="text-xs text-muted-foreground">Número de falhas que impactam cada par de subsistemas</p>
        </div>
        <div className="overflow-x-auto p-4">
          <table className="text-xs w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-muted-foreground font-medium">Sistema</th>
                {uniqueSystems.map(s => (
                  <th key={s} className="p-2 text-center text-muted-foreground font-medium" style={{ writingMode: "vertical-lr", minWidth: 40 }}>
                    {s.replace("Sistema ", "").replace("Caixa de ", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {uniqueSystems.map(row => (
                <tr key={row} className="border-t border-border/30">
                  <td className="p-2 font-medium whitespace-nowrap">{row.replace("Sistema ", "").replace("Caixa de ", "")}</td>
                  {uniqueSystems.map(col => {
                    const key1 = [row, col].sort().join("→");
                    const conn = connections.find(c => [c.from, c.to].sort().join("→") === key1);
                    const val = row === col ? "—" : conn?.weight || "";
                    const intensity = conn ? Math.min(conn.weight / 5, 1) : 0;
                    return (
                      <td
                        key={col}
                        className="p-2 text-center font-semibold"
                        style={{
                          backgroundColor: row === col ? "hsl(var(--muted))" : intensity > 0 ? `hsl(0, 72%, ${95 - intensity * 40}%)` : undefined,
                          color: intensity > 0.5 ? "hsl(0, 72%, 30%)" : undefined,
                        }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Connection List */}
      <div className="kpi-card">
        <h3 className="text-sm font-semibold mb-4">Conexões Mais Críticas</h3>
        <div className="space-y-2">
          {connections.slice(0, 10).map((conn, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {conn.weight}
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium">{conn.from}</span>
                <span className="text-muted-foreground mx-2">↔</span>
                <span className="text-sm font-medium">{conn.to}</span>
              </div>
              <div className="h-2 flex-1 max-w-[120px] bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${(conn.weight / Math.max(...connections.map(c => c.weight))) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
