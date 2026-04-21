import { cn } from "@/lib/utils";

/**
 * Drapeau guinéen (bandes verticales rouge / jaune / vert).
 * Utilisé en accent visuel discret dans le header, footer et zones d'identité.
 */
export function GuineaFlag({
  className,
  orientation = "horizontal",
  ariaLabel = "Drapeau de la Guinée",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
  ariaLabel?: string;
}) {
  const isVertical = orientation === "vertical";
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex overflow-hidden rounded-[2px] ring-1 ring-black/10",
        isVertical ? "h-6 w-1.5 flex-col" : "h-2 w-6 flex-row",
        className,
      )}
    >
      <span className="flex-1 bg-[oklch(0.55_0.2_25)]" />
      <span className="flex-1 bg-[oklch(0.82_0.17_85)]" />
      <span className="flex-1 bg-[oklch(0.58_0.17_152)]" />
    </span>
  );
}

/**
 * Bande accent drapeau guinéen — 3 couleurs en barre fine.
 * Idéale en bordure haute/basse de section pour ancrer l'identité nationale.
 */
export function GuineaFlagStripe({
  className,
  height = "h-1",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      role="presentation"
      aria-hidden
      className={cn("flex w-full", height, className)}
    >
      <div className="flex-1 bg-[oklch(0.55_0.2_25)]" />
      <div className="flex-1 bg-[oklch(0.82_0.17_85)]" />
      <div className="flex-1 bg-[oklch(0.58_0.17_152)]" />
    </div>
  );
}
