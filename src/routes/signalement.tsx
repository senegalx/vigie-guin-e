import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ReportForm } from "@/components/report/ReportForm";

export const Route = createFileRoute("/signalement")({
  head: () => ({
    meta: [
      { title: "Signalement sécurisé — Vigie 224" },
      {
        name: "description",
        content:
          "Documentez en toute sécurité un incident dont vous avez été témoin. Canal anonyme, données expurgées.",
      },
      { property: "og:title", content: "Signalement sécurisé — Vigie 224" },
      {
        property: "og:description",
        content:
          "Canal citoyen anonyme pour transmettre vos témoignages et preuves. Protection des sources garantie.",
      },
    ],
  }),
  component: ReportPage,
});

function ReportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-status-resolved" />
          Canal anonyme · chiffré
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Documenter l'inacceptable, en toute sécurité
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Si vous avez été témoin d'un tir sur des civils, d'un kidnapping nocturne ou de toute
          atteinte aux libertés, vous pouvez nous transmettre vos preuves. Nous expurgeons
          systématiquement toute donnée permettant de vous identifier avant publication.
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
        <ReportForm />
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        Pour des preuves particulièrement sensibles (vidéos, identités), privilégiez un canal
        chiffré bout-en-bout (Signal, Telegram). Les coordonnées sont disponibles sur demande
        auprès des coalitions partenaires.
      </div>
    </div>
  );
}
