import { subsystems, type SystemStatus } from "@/data/protectionMatrix";
import { CheckCircle2, AlertTriangle, XCircle, MinusCircle } from "lucide-react";

const statusConfig: Record<SystemStatus, { label: string; icon: typeof CheckCircle2; classes: string }> = {
  operational: { label: "Operacional", icon: CheckCircle2, classes: "text-success" },
  warning: { label: "Alerta", icon: AlertTriangle, classes: "text-warning" },
  fault: { label: "Falha", icon: XCircle, classes: "text-destructive" },
  offline: { label: "Offline", icon: MinusCircle, classes: "text-muted-foreground" },
};

export default function Subsystems() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold">Subsistemas do WTG</h2>
        <p className="text-sm text-muted-foreground">Componentes e status dos subsistemas da turbina GWH171 6.0MW</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {subsystems.map(sub => {
          const { label, icon: StatusIcon, classes } = statusConfig[sub.status];
          return (
            <div key={sub.name} className="kpi-card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{sub.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{sub.name}</h3>
                    <div className={`flex items-center gap-1 text-xs ${classes}`}>
                      <StatusIcon className="h-3 w-3" />
                      {label}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{sub.totalFaults}</p>
                  <p className="text-[10px] text-muted-foreground">falhas cat.</p>
                </div>
              </div>
              {sub.criticalFaults > 0 && (
                <div className="text-xs text-destructive font-medium mb-2">
                  ⚠ {sub.criticalFaults} falha(s) crítica(s)
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {sub.components.map(c => (
                  <span key={c} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
