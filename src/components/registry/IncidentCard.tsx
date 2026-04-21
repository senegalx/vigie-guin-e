import { Calendar, MapPin, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { VerificationBadge } from "./VerificationBadge";
import { VictimPhoto } from "./VictimPhoto";
import type { Incident } from "@/data/types";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function IncidentCard({ incident }: { incident: Incident }) {
  return (
    <Card className="flex flex-col gap-4 p-5 shadow-card transition-shadow hover:shadow-elevated">
      <div className="flex items-start gap-4">
        <div className="w-20 shrink-0 sm:w-24">
          <VictimPhoto name={incident.victimName} photoUrl={incident.photoUrl} />
        </div>
        <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              <span className="truncate">
                {incident.profession ?? "Citoyen·ne"}
                {incident.age ? ` · ${incident.age} ans` : ""}
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-foreground">
              {incident.victimName}
            </h3>
          </div>
          <StatusBadge status={incident.status} />
        </div>
      </div>

      <div className="grid gap-2 text-sm">
        <div className="flex items-start gap-2 text-foreground">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <span>{formatDate(incident.date)}</span>
        </div>
        <div className="flex items-start gap-2 text-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <span>{incident.location}</span>
        </div>
      </div>

      <div className="rounded-md border border-border/70 bg-muted/40 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Type d'incident
        </div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{incident.type}</div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {incident.circumstances}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
        <VerificationBadge level={incident.verification} />
        {incident.unitsInvolved.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {incident.unitsInvolved.map((u) => (
              <span
                key={u}
                className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] font-medium text-foreground"
              >
                {u}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
