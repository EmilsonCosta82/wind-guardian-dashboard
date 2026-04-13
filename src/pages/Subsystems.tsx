import { subsystems } from "@/data/protectionMatrix";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export default function Subsystems() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold">Subsistemas do WTG</h2>
        <p className="text-sm text-muted-foreground">Componentes e status dos subsistemas da turbina GWH171 6.0MW</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {subsystems.map(sub => {
          const hasCritical = sub.criticalFaults > 0;
          return (
            <div key={sub.name} className="kpi-card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{sub.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{sub.name}</h3>
                    <div className={`flex items-center gap-1 text-xs ${hasCritical ? 'text-destructive' : 'text-success'}`}>
                      {hasCritical ? <AlertTriangle className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                      {hasCritical ? 'Alerta' : 'Operacional'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{sub.totalFaults}</p>
                  <p className="text-[10px] text-muted-foreground">falhas cat.</p>
                </div>
              </div>
              {sub.criticalFaults > 0 && (
                <div className="text-xs text-destructive font-medium">
                  ⚠ {sub.criticalFaults} falha(s) crítica(s)
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}