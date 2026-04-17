import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/layout/SiteShell";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
        <div className="font-display text-7xl font-bold text-primary">404</div>
        <h1 className="mt-4 font-display text-xl font-semibold text-foreground">
          Page introuvable
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          La page demandée n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Retour à l'accueil
        </Link>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vigie 224 — Observatoire Citoyen des Droits Humains en Guinée" },
      {
        name: "description",
        content:
          "Plateforme citoyenne indépendante de documentation, cartographie et signalement des incidents liés aux libertés publiques en Guinée.",
      },
      { name: "author", content: "Vigie 224" },
      { property: "og:title", content: "Vigie 224 — Observatoire Citoyen" },
      {
        property: "og:description",
        content:
          "Cartographier les faits, protéger nos droits. Observation citoyenne indépendante des libertés publiques en Guinée.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SiteShell>
      <Outlet />
      <Toaster position="top-center" />
    </SiteShell>
  );
}
