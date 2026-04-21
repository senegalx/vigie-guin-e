import { CheckCircle2, Search, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VerificationLevel } from "@/data/types";

const config: Record<
  VerificationLevel,
  { label: string; icon: typeof CheckCircle2; className: string; tooltip: string }
> = {
  vérifié: {
    label: "Vérifié",
    icon: CheckCircle2,
    className: "bg-verif-confirmed/10 text-verif-confirmed border-verif-confirmed/30",
    tooltip: "≥ 2 sources indépendantes ou document officiel",
  },
  en_cours: {
    label: "En vérification",
    icon: Search,
    className: "bg-verif-pending/10 text-verif-pending border-verif-pending/30",
    tooltip: "Témoignage reçu, vérification en cours",
  },
  non_vérifié: {
    label: "Non vérifié",
    icon: FileText,
    className: "bg-verif-unverified/10 text-verif-unverified border-verif-unverified/40",
    tooltip: "Source unique — publié pour mémoire",
  },
};

export function VerificationBadge({
  level,
  className,
}: {
  level: VerificationLevel;
  className?: string;
}) {
  const cfg = config[level];
  const Icon = cfg.icon;
  return (
    <span
      title={cfg.tooltip}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        cfg.className,
        className,
      )}
    >
      <Icon className="h-3 w-3" />
      {cfg.label}
    </span>
  );
}

export const VERIFICATION_LEVELS: VerificationLevel[] = [
  "vérifié",
  "en_cours",
  "non_vérifié",
];
