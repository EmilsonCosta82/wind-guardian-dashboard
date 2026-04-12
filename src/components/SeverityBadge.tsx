import type { Severity } from "@/data/protectionMatrix";

const config: Record<Severity, { label: string; classes: string }> = {
  critical: { label: "Crítico", classes: "bg-destructive/15 text-destructive border border-destructive/20" },
  high: { label: "Alto", classes: "bg-warning/15 text-warning border border-warning/20" },
  medium: { label: "Médio", classes: "bg-info/15 text-info border border-info/20" },
  low: { label: "Baixo", classes: "bg-success/15 text-success border border-success/20" },
};

export default function SeverityBadge({ severity }: { severity: Severity }) {
  const { label, classes } = config[severity];
  return <span className={`status-badge ${classes}`}>{label}</span>;
}
