import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IncidentStatus } from "@/data/types";

const statusConfig: Record<
  IncidentStatus,
  { label: string; className: string }
> = {
  décédé: {
    label: "Décès",
    className:
      "bg-status-deceased text-status-deceased-foreground hover:bg-status-deceased/90 border-transparent",
  },
  disparu: {
    label: "Disparition",
    className:
      "bg-status-missing text-status-missing-foreground hover:bg-status-missing/90 border-transparent",
  },
  libéré: {
    label: "Libéré",
    className:
      "bg-status-resolved text-status-resolved-foreground hover:bg-status-resolved/90 border-transparent",
  },
  blessé: {
    label: "Blessé",
    className:
      "bg-status-injured text-status-injured-foreground hover:bg-status-injured/90 border-transparent",
  },
  détenu: {
    label: "Détention",
    className:
      "bg-status-detained text-status-detained-foreground hover:bg-status-detained/90 border-transparent",
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
  "décédé",
  "disparu",
  "libéré",
  "blessé",
  "détenu",
];
