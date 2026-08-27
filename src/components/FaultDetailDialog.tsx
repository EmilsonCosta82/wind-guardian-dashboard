import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { FaultEntry, Severity } from "@/data/protectionMatrix";
import SeverityBadge from "./SeverityBadge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { AlertTriangle, ArrowRight, CheckCircle2, LinkIcon, Shield, Globe, Pencil, Save, X, RotateCcw, Plus, Trash2 } from "lucide-react";

interface Props {
  fault: FaultEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (id: number, patch: Partial<FaultEntry>) => void;
  onReset: (id: number) => void;
  isEdited: boolean;
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export default function FaultDetailDialog({ fault, open, onOpenChange, onSave, onReset, isEdited }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<FaultEntry | null>(fault);

  useEffect(() => {
    setDraft(fault);
    setEditing(false);
  }, [fault]);

  if (!fault || !draft) return null;

  const set = <K extends keyof FaultEntry>(key: K, value: FaultEntry[K]) =>
    setDraft({ ...draft, [key]: value });

  const handleSave = () => {
    onSave(fault.id, {
      faultDescription: draft.faultDescription,
      faultDescriptionEn: draft.faultDescriptionEn,
      severity: draft.severity,
      stopLevel: draft.stopLevel,
      resetLevel: draft.resetLevel,
      safetyChainTriggered: draft.safetyChainTriggered,
      systemImpact: draft.systemImpact,
      affectedSystems: draft.affectedSystems,
      correctiveActions: draft.correctiveActions,
    });
    setEditing(false);
    toast({ title: "Alterações salvas", description: `Falha ${fault.faultCode} atualizada.` });
  };

  const view = editing ? draft : fault;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-3">
            <span className="text-2xl">{fault.subsystemIcon}</span>
            <div className="flex-1 min-w-0">
              {editing ? (
                <input className={inputClass} value={draft.faultDescription} onChange={e => set("faultDescription", e.target.value)} />
              ) : (
                <DialogTitle className="text-lg">{view.faultDescription}</DialogTitle>
              )}
              <p className="text-sm text-muted-foreground mt-0.5">{fault.faultCode} · {fault.subsystem}</p>
              {editing ? (
                <input className={`${inputClass} mt-2`} value={draft.faultDescriptionEn} onChange={e => set("faultDescriptionEn", e.target.value)} />
              ) : view.faultDescriptionEn ? (
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Globe className="h-3 w-3" /> {view.faultDescriptionEn}
                </p>
              ) : null}
            </div>
          </div>
        </DialogHeader>

        {/* Edit toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-3">
          {editing ? (
            <>
              <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
              <Button size="sm" variant="outline" onClick={() => { setDraft(fault); setEditing(false); }}>
                <X className="h-4 w-4 mr-1" /> Cancelar
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
              <Pencil className="h-4 w-4 mr-1" /> Editar
            </Button>
          )}
          {isEdited && !editing && (
            <Button size="sm" variant="ghost" onClick={() => { onReset(fault.id); toast({ title: "Registro restaurado" }); }}>
              <RotateCcw className="h-4 w-4 mr-1" /> Restaurar original
            </Button>
          )}
          {isEdited && <span className="status-badge bg-warning/15 text-warning">Editado</span>}
        </div>

        <div className="space-y-5 mt-4">
          {/* Status Row */}
          {editing ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="text-xs font-medium space-y-1 block">
                <span className="text-muted-foreground">Severidade</span>
                <select className={inputClass} value={draft.severity} onChange={e => set("severity", e.target.value as Severity)}>
                  <option value="critical">Crítico</option>
                  <option value="high">Alto</option>
                  <option value="medium">Médio</option>
                  <option value="low">Baixo</option>
                </select>
              </label>
              <label className="text-xs font-medium space-y-1 block">
                <span className="text-muted-foreground">Nível de Parada</span>
                <input className={inputClass} value={draft.stopLevel} onChange={e => set("stopLevel", e.target.value)} />
              </label>
              <label className="text-xs font-medium space-y-1 block">
                <span className="text-muted-foreground">Nível de Reset</span>
                <input className={inputClass} value={draft.resetLevel} onChange={e => set("resetLevel", e.target.value)} />
              </label>
              <label className="flex items-center gap-2 text-xs font-medium mt-5">
                <input type="checkbox" checked={draft.safetyChainTriggered} onChange={e => set("safetyChainTriggered", e.target.checked)} />
                <span>Aciona Cadeia de Segurança</span>
              </label>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              <SeverityBadge severity={view.severity} />
              <span className="status-badge bg-secondary text-secondary-foreground">{view.stopLevel}</span>
              <span className="status-badge bg-secondary text-secondary-foreground">{view.resetLevel}</span>
              {view.safetyChainTriggered && (
                <span className="status-badge bg-destructive/15 text-destructive border border-destructive/20">
                  <Shield className="h-3 w-3" /> Cadeia de Segurança
                </span>
              )}
            </div>
          )}

          {/* System Impact */}
          <div className="rounded-lg bg-destructive/5 border border-destructive/10 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-destructive">Impacto no Sistema</h4>
                {editing ? (
                  <textarea className={`${inputClass} mt-2`} rows={3} value={draft.systemImpact} onChange={e => set("systemImpact", e.target.value)} />
                ) : (
                  <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{view.systemImpact}</p>
                )}
              </div>
            </div>
          </div>

          {/* Affected Systems */}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
              Sistemas Afetados
            </h4>
            {editing ? (
              <input
                className={inputClass}
                value={draft.affectedSystems.join(", ")}
                onChange={e => set("affectedSystems", e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                placeholder="Separe por vírgula"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {view.affectedSystems.map(sys => (
                  <span key={sys} className="status-badge bg-accent text-accent-foreground">{sys}</span>
                ))}
              </div>
            )}
          </div>

          {/* Corrective Actions */}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Ações Corretivas
            </h4>
            <div className="space-y-3">
              {view.correctiveActions.map((action, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    {editing ? (
                      <div className="space-y-2">
                        <textarea
                          className={inputClass}
                          rows={2}
                          value={action.action}
                          onChange={e => {
                            const next = [...draft.correctiveActions];
                            next[idx] = { ...next[idx], action: e.target.value };
                            set("correctiveActions", next);
                          }}
                        />
                        <div className="flex gap-2">
                          <input
                            className={inputClass}
                            value={action.responsible}
                            placeholder="Responsável"
                            onChange={e => {
                              const next = [...draft.correctiveActions];
                              next[idx] = { ...next[idx], responsible: e.target.value };
                              set("correctiveActions", next);
                            }}
                          />
                          <input
                            className={inputClass}
                            value={action.timeEstimate}
                            placeholder="Tempo"
                            onChange={e => {
                              const next = [...draft.correctiveActions];
                              next[idx] = { ...next[idx], timeEstimate: e.target.value };
                              set("correctiveActions", next);
                            }}
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => set("correctiveActions", draft.correctiveActions.filter((_, i) => i !== idx).map((a, i) => ({ ...a, step: i + 1 })))}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm leading-relaxed">{action.action}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            {action.responsible}
                          </span>
                          <span>⏱ {action.timeEstimate}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
              {editing && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => set("correctiveActions", [...draft.correctiveActions, { step: draft.correctiveActions.length + 1, action: "", responsible: "", timeEstimate: "" }])}
                >
                  <Plus className="h-4 w-4 mr-1" /> Adicionar ação
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
