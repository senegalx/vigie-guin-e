import { User } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Emplacement photo réutilisable pour le registre et le mémorial.
 * Affiche le portrait si fourni, sinon un placeholder digne avec les initiales.
 */
function getInitials(name: string) {
  // Retire les parenthèses et leur contenu, prend les 2 premières initiales
  const clean = name.replace(/\(.*?\)/g, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

export function VictimPhoto({
  name,
  photoUrl,
  className,
  aspect = "square",
}: {
  name: string;
  photoUrl?: string;
  className?: string;
  aspect?: "square" | "portrait" | "wide";
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "wide"
        ? "aspect-[16/9]"
        : "aspect-square";

  if (photoUrl) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-md border border-border bg-muted",
          aspectClass,
          className,
        )}
      >
        <img
          src={photoUrl}
          alt={`Portrait de ${name}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  // Placeholder respectueux : initiales sur fond institutionnel
  return (
    <div
      role="img"
      aria-label={`Portrait non disponible pour ${name}`}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-md border border-border bg-gradient-to-br from-muted to-surface",
        aspectClass,
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex flex-col items-center gap-1.5 text-muted-foreground">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-base font-bold text-primary">
          {getInitials(name)}
        </div>
        <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider">
          <User className="h-2.5 w-2.5" />
          Photo non disponible
        </div>
      </div>
    </div>
  );
}
