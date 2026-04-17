import { Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div className="font-display text-base font-bold tracking-tight text-foreground">
              Vigie <span className="text-status-missing">224</span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Plateforme citoyenne indépendante de documentation, de cartographie et de signalement
            des incidents liés aux libertés publiques en Guinée. Données factuelles, vérifiées,
            anonymisées lorsque nécessaire.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Plateforme
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/cartographie" className="text-muted-foreground hover:text-foreground">
                Cartographie
              </Link>
            </li>
            <li>
              <Link to="/registre" className="text-muted-foreground hover:text-foreground">
                Registre factuel
              </Link>
            </li>
            <li>
              <Link to="/memorial" className="text-muted-foreground hover:text-foreground">
                Mémorial
              </Link>
            </li>
            <li>
              <Link to="/repression" className="text-muted-foreground hover:text-foreground">
                Unités impliquées
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Citoyen
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/signalement" className="text-muted-foreground hover:text-foreground">
                Faire un signalement
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="text-muted-foreground hover:text-foreground">
                Notre démarche
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Vigie 224 — Observatoire citoyen indépendant.</p>
          <p>Toute republication doit citer la source et préserver l'anonymat des familles.</p>
        </div>
      </div>
    </footer>
  );
}
