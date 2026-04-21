import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuineaFlag, GuineaFlagStripe } from "@/components/layout/GuineaFlag";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-status-missing/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-status-deceased/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/85 backdrop-blur">
            <GuineaFlag className="h-2.5 w-4" />
            Mémorial digital · Guinée · 2021 — 2025
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Mémorial digital des victimes <br className="hidden sm:block" />
            <span className="text-status-missing">de la répression du CNRD.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Depuis le coup d'État du 5 septembre 2021, la Guinée fait face à une féroce répression
            des voix dissidentes. Cette plateforme indépendante cartographie les exactions pour
            lutter contre l'oubli et œuvrer pour que justice soit rendue.
          </p>

          <p className="mt-4 font-display text-base italic text-primary-foreground/70">
            « Ils avaient un nom. Nous le garderons. »
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/cartographie">
                Consulter la carte interactive
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/memorial">Voir le registre des victimes</Link>
            </Button>
          </div>
        </div>
      </div>
      <GuineaFlagStripe height="h-1" />
    </section>
  );
}
