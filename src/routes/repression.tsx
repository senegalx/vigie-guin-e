import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { mockUnits } from "@/data/mockUnits";
import { mockIncidents } from "@/data/mockIncidents";

export const Route = createFileRoute("/repression")({
  head: () => ({
    meta: [
      { title: "La machine répressive — Vigie 224" },
      {
        name: "description",
        content:
          "Comprendre la chaîne institutionnelle de la répression : BATA, BAC, CMIS, GFS, GN — unités citées dans les cas documentés.",
      },
      { property: "og:title", content: "Comprendre la machine répressive — Vigie 224" },
      {
        property: "og:description",
        content:
          "La répression en Guinée ne relève pas de bavures isolées. Elle s'inscrit dans la fermeture progressive de l'espace civique.",
      },
    ],
  }),
  component: RepressionPage,
});

function RepressionPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Responsabilité institutionnelle
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Comprendre la machine répressive
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          La répression en Guinée ne relève pas de bavures isolées, mais d'une fermeture
          progressive de l'espace civique et de la suppression des libertés démocratiques par
          l'appareil d'État. Des exécutions extrajudiciaires, des détentions injustifiées de
          militants et des traitements dégradants ont été documentés.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Cette page recense les unités de forces de défense et de sécurité les plus fréquemment
          citées par les témoins et les rapports de la société civile.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockUnits.map((unit) => {
          const count = mockIncidents.filter((i) => i.unitsInvolved.includes(unit.code)).length;
          return (
            <Card key={unit.code} className="flex h-full flex-col gap-4 p-6 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {unit.type}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-foreground">
                    {unit.code}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-foreground">
                    {unit.fullName}
                  </div>
                </div>
                <div className="rounded-md bg-primary px-2.5 py-1.5 text-center text-primary-foreground">
                  <div className="font-display text-lg font-bold leading-none">{count}</div>
                  <div className="mt-0.5 text-[9px] font-medium uppercase tracking-wider opacity-80">
                    cas cités
                  </div>
                </div>
              </div>
              <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                {unit.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
