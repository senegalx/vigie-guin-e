import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/registry/StatusBadge";
import { mockIncidents } from "@/data/mockIncidents";

export const Route = createFileRoute("/memorial")({
  head: () => ({
    meta: [
      { title: "Mémorial des victimes — Vigie 224" },
      {
        name: "description",
        content:
          "Hommage et recensement des citoyens fauchés ou portés disparus. Devoir de mémoire et exigence de justice.",
      },
      { property: "og:title", content: "Mémorial — Vigie 224" },
      {
        property: "og:description",
        content:
          "Recensement respectueux des citoyens victimes de la répression en Guinée.",
      },
    ],
  }),
  component: MemorialPage,
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function MemorialPage() {
  const victims = mockIncidents.filter((i) => i.status === "décédé" || i.status === "disparu");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Devoir de mémoire
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Registre des citoyens fauchés et disparus
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Ce mémorial recense des citoyens — souvent jeunes élèves, étudiants ou travailleurs —
          tués par balle, décédés en détention ou portés disparus dans des circonstances troubles.
          Par sécurité, certaines identités sont protégées et aucune donnée de contact familial
          n'est publiée.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {victims.map((v) => (
          <Card key={v.id} className="flex flex-col gap-4 p-5 shadow-card">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {v.victimName}
                </h3>
                {(v.profession || v.age) && (
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                    {v.profession}
                    {v.profession && v.age ? " · " : ""}
                    {v.age ? `${v.age} ans` : ""}
                  </p>
                )}
              </div>
              <StatusBadge status={v.status} />
            </div>
            <div className="space-y-1.5 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                {formatDate(v.date)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {v.location}
              </div>
            </div>
            <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
              {v.circumstances}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
