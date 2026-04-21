import { useMemo } from "react";
import { Layers, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/registry/StatusBadge";
import type { Incident } from "@/data/types";

/**
 * Placeholder visuel pour la carte interactive.
 * En production : remplacer par MapLibre / Leaflet / React-Map-GL avec
 * les marqueurs colorés selon `status` (cf. tokens design system).
 */
export function MapPlaceholder({ incidents }: { incidents: Incident[] }) {
  // Bornes approximatives Conakry pour mapper lat/lng → %
  const bounds = useMemo(
    () => ({ minLat: 9.495, maxLat: 9.65, minLng: -13.72, maxLng: -13.58 }),
    [],
  );

  const project = (lat: number, lng: number) => {
    const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
    const y = (1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 100;
    return { x, y };
  };

  const statusColor = (s: Incident["status"]) => {
    switch (s) {
      case "tué":
        return "bg-status-deceased";
      case "enlevé":
        return "bg-status-missing";
      case "kidnappé":
        return "bg-status-injured";
      case "disparu":
        return "bg-status-detained";
      case "exilé":
        return "bg-status-exiled";
      case "prisonnier_politique":
        return "bg-status-resolved";
    }
  };

  return (
    <div className="relative h-[60vh] min-h-[480px] w-full overflow-hidden rounded-xl border border-border bg-primary">
      {/* Faux fond carte stylisé */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-status-detained/30"
      />

      <div className="absolute inset-x-8 top-8 flex items-center gap-2 text-primary-foreground/70">
        <MapPin className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-wider">Conakry — Guinée</span>
      </div>

      {incidents.map((inc) => {
        const { x, y } = project(inc.coordinates.lat, inc.coordinates.lng);
        if (x < 0 || x > 100 || y < 0 || y > 100) return null;
        return (
          <div
            key={inc.id}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className={`absolute inset-0 -m-1 animate-ping rounded-full ${statusColor(inc.status)} opacity-40`}
            />
            <span
              className={`relative block h-3.5 w-3.5 rounded-full ${statusColor(inc.status)} ring-2 ring-primary-foreground/80 shadow-lg`}
            />
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden w-56 -translate-x-1/2 rounded-md border border-border bg-popover p-3 text-left shadow-elevated group-hover:block">
              <div className="flex items-start justify-between gap-2">
                <div className="font-semibold text-popover-foreground">{inc.victimName}</div>
                <StatusBadge status={inc.status} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {inc.location} · {new Date(inc.date).toLocaleDateString("fr-FR")}
              </div>
              <div className="mt-1 text-xs text-foreground">{inc.type}</div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 rounded-lg border border-border/40 bg-background/85 p-3 text-xs backdrop-blur sm:right-auto">
        <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-foreground">
          <Layers className="h-3.5 w-3.5" />
          Légende
        </div>
        {[
          { label: "Tué·e", cls: "bg-status-deceased" },
          { label: "Enlevé·e", cls: "bg-status-missing" },
          { label: "Kidnappé·e", cls: "bg-status-injured" },
          { label: "Disparu·e", cls: "bg-status-detained" },
          { label: "Exilé·e", cls: "bg-status-exiled" },
          { label: "Prisonnier pol.", cls: "bg-status-resolved" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5 text-foreground">
            <span className={`h-2.5 w-2.5 rounded-full ${l.cls}`} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}
