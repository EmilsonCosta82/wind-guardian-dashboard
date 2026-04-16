import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { FaultEntry } from "@/data/protectionMatrix";
import SeverityBadge from "./SeverityBadge";
import { AlertTriangle, ArrowRight, CheckCircle2, LinkIcon, Shield } from "lucide-react";

interface Props {
  fault: FaultEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FaultDetailDialog({ fault, open, onOpenChange }: Props) {
  if (!fault) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{fault.subsystemIcon}</span>
            <div>
              <DialogTitle className="text-lg">{fault.faultDescription}</DialogTitle>
              <p className="text-sm text-muted-foreground mt-0.5">{fault.faultCode} · {fault.component}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          {/* Status Row */}
          <div className="flex flex-wrap gap-3">
            <SeverityBadge severity={fault.severity} />
            <span className="status-badge bg-secondary text-secondary-foreground">{fault.stopLevel}</span>
            <span className="status-badge bg-secondary text-secondary-foreground">{fault.resetLevel}</span>
            {fault.safetyChainTriggered && (
              <span className="status-badge bg-destructive/15 text-destructive border border-destructive/20">
                <Shield className="h-3 w-3" /> Cadeia de Segurança
              </span>
            )}
          </div>

          {/* System Impact */}
          <div className="rounded-lg bg-destructive/5 border border-destructive/10 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-destructive">Impacto no Sistema</h4>
                <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{fault.systemImpact}</p>
              </div>
            </div>
          </div>

          {/* Affected Systems */}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
              Sistemas Afetados
            </h4>
            <div className="flex flex-wrap gap-2">
              {fault.affectedSystems.map(sys => (
                <span key={sys} className="status-badge bg-accent text-accent-foreground">{sys}</span>
              ))}
            </div>
          </div>

          {/* Corrective Actions */}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Ações Corretivas
            </h4>
            <div className="space-y-3">
              {fault.correctiveActions.map(action => (
                <div key={action.step} className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                    {action.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed">{action.action}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3" />
                        {action.responsible}
                      </span>
                      <span>⏱ {action.timeEstimate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
