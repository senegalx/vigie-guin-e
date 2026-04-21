import { Eye, FileText, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const missions = [
  {
    icon: Eye,
    title: "Nommer",
    description:
      "Donner un nom et un visage à chaque victime. Ne pas la laisser devenir un simple chiffre dans un rapport.",
  },
  {
    icon: FileText,
    title: "Documenter",
    description:
      "Recenser les faits, croiser les sources, conserver les preuves dans une base de données rigoureuse, transparente sur son niveau de vérification.",
  },
  {
    icon: Shield,
    title: "Protéger",
    description:
      "Garantir l'anonymat des sources, des familles et des contributeurs. Un canal sécurisé pour témoigner sans risque.",
  },
];

export function MissionCards() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Notre engagement
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ce mémorial ne juge pas, il&nbsp;témoigne. Il ne condamne pas, il&nbsp;nomme.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {missions.map((m) => {
            const Icon = m.icon;
            return (
              <Card key={m.title} className="p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
