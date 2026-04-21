import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, MessageCircle, Send } from "lucide-react";
import { ReportForm } from "@/components/report/ReportForm";

export const Route = createFileRoute("/signalement")({
  head: () => ({
    meta: [
      { title: "Documenter l'inacceptable — Vigie 224" },
      {
        name: "description",
        content:
          "Canal sécurisé et anonyme pour transmettre un témoignage, une preuve ou un signalement. Protection totale des sources.",
      },
      { property: "og:title", content: "Documenter l'inacceptable en toute sécurité — Vigie 224" },
      {
        property: "og:description",
        content:
          "L'État utilise arrestations arbitraires et disparitions forcées. Transmettez vos preuves via canal anonyme.",
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
          L'État utilise des arrestations arbitraires et des disparitions forcées pour museler la
          dissidence. Si vous avez été témoin d'une exaction, de tirs sur des civils ou d'un
          kidnapping nocturne par des hommes armés, vous pouvez nous transmettre vos preuves
          (photos, vidéos, témoignages).
        </p>
        <div className="mt-4 rounded-lg border border-status-resolved/30 bg-status-resolved/10 p-4 text-sm text-foreground">
          <strong className="font-semibold">Garantie de sécurité :</strong> ce canal est anonyme.
          Nous expurgeons systématiquement toutes les données permettant de vous identifier avant
          toute publication, afin de vous protéger de toute tentative de représailles.
        </div>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
        <ReportForm />
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4">
        <div className="flex items-start gap-3">
          <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm text-muted-foreground">
            <div className="font-semibold text-foreground">Preuves particulièrement sensibles</div>
            <p className="mt-1 leading-relaxed">
              Pour des vidéos, des identités ou des documents critiques, privilégiez un canal
              chiffré bout-en-bout (Signal, Telegram). Les coordonnées sécurisées sont disponibles
              sur demande auprès des coalitions partenaires de la société civile guinéenne.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary">
              <Send className="h-3.5 w-3.5" />
              Signal · Telegram (sur demande)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
