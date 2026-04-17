import { createFileRoute } from "@tanstack/react-router";
import { Eye, FileText, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Vigie 224" },
      {
        name: "description",
        content:
          "Notre démarche, notre méthodologie et notre engagement pour la transparence et la défense des libertés en Guinée.",
      },
      { property: "og:title", content: "Notre démarche — Vigie 224" },
      {
        property: "og:description",
        content:
          "Plateforme indépendante construite avec et pour les coalitions citoyennes guinéennes.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Notre démarche
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Une plateforme citoyenne, indépendante et rigoureuse
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Vigie 224 a été conçue pour centraliser, sécuriser et visualiser les preuves d'atteintes
          aux libertés publiques en Guinée. Les données s'appuient sur un travail rigoureux de
          terrain, mené par des coalitions de la société civile (notamment Tournons La Page
          Guinée), souvent dans un climat de censure et d'intimidation.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Eye,
            title: "Observer",
            text: "Veille continue de l'espace civique et identification des schémas répétés.",
          },
          {
            icon: FileText,
            title: "Documenter",
            text: "Croisement de sources, vérification, archivage durable et accessible.",
          },
          {
            icon: Shield,
            title: "Protéger",
            text: "Anonymisation systématique des sources et des familles vulnérables.",
          },
        ].map((m) => {
          const Icon = m.icon;
          return (
            <Card key={m.title} className="p-5 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.text}</p>
            </Card>
          );
        })}
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Méthodologie
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Chaque incident publié est documenté à partir d'au moins deux sources convergentes :
          témoignage direct, rapport d'ONG, article de presse vérifié ou matériel visuel
          authentifié. Les données sensibles (numéros de téléphone des familles, identités
          d'enfants, lieux de refuge) ne sont jamais exposées publiquement.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          La base technique repose sur une architecture modulaire (NocoDB côté backend, front
          statique côté public) garantissant performance, indépendance et résilience.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-status-deceased/10 text-status-deceased">
            <Heart className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Hommage aux familles
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nous rendons hommage au courage des dizaines de familles et de proches qui ont
              accepté de partager leur vécu, parfois sous anonymat par crainte de représailles.
              Cette plateforme leur est dédiée.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
