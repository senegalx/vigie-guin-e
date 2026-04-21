import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuineaFlagStripe } from "@/components/layout/GuineaFlag";

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-12">
        <GuineaFlagStripe height="h-1" className="absolute inset-x-0 top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-status-missing/15 blur-3xl"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <Lock className="h-3.5 w-3.5" />
              Canal anonyme · sources protégées
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Témoin, proche, journaliste&nbsp;? Votre voix peut sauver une mémoire.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
              Toutes les informations identifiant une source sont supprimées avant publication.
              Documenter, c'est résister à l'oubli.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/signalement">Transmettre un témoignage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
