import { Filter } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { mockUnits } from "@/data/mockUnits";
import { STATUS_OPTIONS } from "@/components/registry/StatusBadge";
import type { IncidentStatus, UnitCode } from "@/data/types";

export interface MapFilters {
  statuses: Set<IncidentStatus>;
  units: Set<UnitCode>;
}

export function MapFilterPanel({
  filters,
  onChange,
}: {
  filters: MapFilters;
  onChange: (next: MapFilters) => void;
}) {
  const toggleStatus = (s: IncidentStatus) => {
    const next = new Set(filters.statuses);
    next.has(s) ? next.delete(s) : next.add(s);
    onChange({ ...filters, statuses: next });
  };
  const toggleUnit = (u: UnitCode) => {
    const next = new Set(filters.units);
    next.has(u) ? next.delete(u) : next.add(u);
    onChange({ ...filters, units: next });
  };

  return (
    <div className="flex h-full flex-col gap-6 p-1">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Filter className="h-3.5 w-3.5" />
          Filtres
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Affinez la cartographie selon vos critères.
        </p>
      </div>

      <Separator />

      <div>
        <Label className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Statut de l'incident
        </Label>
        <div className="mt-3 space-y-2.5">
          {STATUS_OPTIONS.map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <Checkbox
                checked={filters.statuses.has(s)}
                onCheckedChange={() => toggleStatus(s)}
              />
              <span className="capitalize text-foreground">{s}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <Label className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Unités impliquées
        </Label>
        <div className="mt-3 space-y-2.5">
          {mockUnits.map((u) => (
            <label key={u.code} className="flex cursor-pointer items-start gap-2.5 text-sm">
              <Checkbox
                checked={filters.units.has(u.code)}
                onCheckedChange={() => toggleUnit(u.code)}
                className="mt-0.5"
              />
              <span className="text-foreground">
                <span className="font-mono text-xs font-semibold">{u.code}</span>
                <span className="ml-2 text-muted-foreground">{u.fullName}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
