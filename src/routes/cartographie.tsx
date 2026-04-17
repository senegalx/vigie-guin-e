import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPlaceholder } from "@/components/map/MapPlaceholder";
import { MapFilterPanel, type MapFilters } from "@/components/map/MapFilterPanel";
import { mockIncidents } from "@/data/mockIncidents";
import { STATUS_OPTIONS } from "@/components/registry/StatusBadge";
import { mockUnits } from "@/data/mockUnits";

export const Route = createFileRoute("/cartographie")({
  head: () => ({
    meta: [
      { title: "Cartographie — Vigie 224" },
      {
        name: "description",
        content:
          "Carte interactive des incidents documentés en Guinée. Filtrez par statut, unité impliquée et type de violation.",
      },
      { property: "og:title", content: "Cartographie interactive — Vigie 224" },
      {
        property: "og:description",
        content:
          "Visualisez géographiquement les incidents documentés. Filtres avancés et légende contextuelle.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [filters, setFilters] = useState<MapFilters>({
    statuses: new Set(STATUS_OPTIONS),
    units: new Set(mockUnits.map((u) => u.code)),
  });

  const filtered = useMemo(
    () =>
      mockIncidents.filter(
        (inc) =>
          filters.statuses.has(inc.status) &&
          inc.unitsInvolved.some((u) => filters.units.has(u)),
      ),
    [filters],
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Cartographie interactive
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Géographie des incidents documentés
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{filtered.length}</span> incident
            {filtered.length > 1 ? "s" : ""} visible{filtered.length > 1 ? "s" : ""} selon vos
            filtres.
          </p>
        </div>

        {/* Bouton filtres mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
              Filtres
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filtres de cartographie</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <MapFilterPanel filters={filters} onChange={setFilters} />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar desktop */}
        <aside className="hidden h-fit rounded-xl border border-border bg-surface p-5 lg:block">
          <MapFilterPanel filters={filters} onChange={setFilters} />
        </aside>

        <MapPlaceholder incidents={filtered} />
      </div>
    </div>
  );
}
