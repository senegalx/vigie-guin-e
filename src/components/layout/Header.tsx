import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GuineaFlag, GuineaFlagStripe } from "./GuineaFlag";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/cartographie", label: "Cartographie" },
  { to: "/registre", label: "Registre" },
  { to: "/memorial", label: "Mémorial" },
  { to: "/repression", label: "Unités" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <GuineaFlagStripe height="h-[3px]" />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-card">
            <ShieldAlert className="h-5 w-5" aria-hidden />
            <GuineaFlag
              orientation="vertical"
              className="absolute -bottom-1 -right-1 h-4 w-1 ring-2 ring-background"
            />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5 font-display text-base font-bold tracking-tight text-foreground">
              Vigie <span className="text-status-missing">224</span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Observatoire citoyen · Guinée
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-accent text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/signalement">Signaler</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-accent text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link to="/signalement" onClick={() => setOpen(false)}>
              Faire un signalement
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
