import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IncidentStatus } from "@/data/types";

const statusConfig: Record<
  IncidentStatus,
  { label: string; className: string }
> = {
  tué: {
    label: "Tué·e",
    className:
      "bg-status-deceased text-status-deceased-foreground hover:bg-status-deceased/90 border-transparent",
  },
  enlevé: {
    label: "Enlevé·e",
    className:
      "bg-status-missing text-status-missing-foreground hover:bg-status-missing/90 border-transparent",
  },
  kidnappé: {
    label: "Kidnappé·e",
    className:
      "bg-status-injured text-status-injured-foreground hover:bg-status-injured/90 border-transparent",
  },
  disparu: {
    label: "Disparu·e",
    className:
      "bg-status-detained text-status-detained-foreground hover:bg-status-detained/90 border-transparent",
  },
  exilé: {
    label: "Exilé·e",
    className:
      "bg-status-exiled text-status-exiled-foreground hover:bg-status-exiled/90 border-transparent",
  },
  prisonnier_politique: {
    label: "Prisonnier politique",
    className:
      "bg-status-resolved text-status-resolved-foreground hover:bg-status-resolved/90 border-transparent",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: IncidentStatus;
  className?: string;
}) {
  const cfg = statusConfig[status];
  return (
    <Badge className={cn("font-medium uppercase tracking-wide text-[10px]", cfg.className, className)}>
      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {cfg.label}
    </Badge>
  );
}

export const STATUS_OPTIONS: IncidentStatus[] = [
  "tué",
  "enlevé",
  "kidnappé",
  "disparu",
  "exilé",
  "prisonnier_politique",
];

export const STATUS_LABEL: Record<IncidentStatus, string> = {
  tué: "Personnes tuées",
  enlevé: "Personnes enlevées",
  kidnappé: "Personnes kidnappées",
  disparu: "Personnes portées disparues",
  exilé: "Personnes exilées",
  prisonnier_politique: "Prisonniers politiques",
};
