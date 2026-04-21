import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge, STATUS_OPTIONS, STATUS_LABEL } from "@/components/registry/StatusBadge";
import { VerificationBadge } from "@/components/registry/VerificationBadge";
import { mockIncidents } from "@/data/mockIncidents";
import type { IncidentStatus } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/memorial")({
  head: () => ({
    meta: [
      { title: "Mémorial digital des victimes du CNRD — Vigie 224" },
      {
        name: "description",
        content:
          "Recensement respectueux des personnes tuées, enlevées, kidnappées, disparues, exilées et des prisonniers politiques sous le régime du CNRD en Guinée.",
      },
      { property: "og:title", content: "Mémorial digital des victimes du CNRD — Vigie 224" },
      {
        property: "og:description",
        content:
          "« Ils avaient un nom. Nous le garderons. » Mémorial des victimes de la répression en Guinée depuis le 5 septembre 2021.",
      },
    ],
  }),
  component: MemorialPage,
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function MemorialPage() {
  const [active, setActive] = useState<IncidentStatus | "all">("all");

  const counts = useMemo(() => {
    const map = new Map<IncidentStatus, number>();
    STATUS_OPTIONS.forEach((s) => map.set(s, 0));
    mockIncidents.forEach((i) => map.set(i.status, (map.get(i.status) ?? 0) + 1));
    return map;
  }, []);

  const visible = useMemo(
    () => (active === "all" ? mockIncidents : mockIncidents.filter((i) => i.status === active)),
    [active],
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Devoir de mémoire · depuis le 5 septembre 2021
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Mémorial digital des victimes du CNRD
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ce mémorial recense toutes les personnes affectées par la répression du CNRD depuis le
          coup d'État du 5 septembre 2021. Six catégories de documentation, une politique de
          transparence totale sur le statut de vérification de chaque cas. Aucune donnée
          permettant d'identifier les familles n'est publiée.
        </p>
        <blockquote className="mt-6 border-l-4 border-status-missing pl-4 font-display text-lg italic text-foreground">
          « Tant qu'il reste un témoin pour nommer les victimes, les bourreaux n'auront pas le
          dernier mot. »
        </blockquote>
      </header>

      {/* Compteurs par catégorie */}
      <div className="mt-10 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        <button
          onClick={() => setActive("all")}
          className={cn(
            "rounded-lg border p-3 text-left transition-colors",
            active === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-surface hover:border-primary/40",
          )}
        >
          <div className="font-display text-2xl font-bold">{mockIncidents.length}</div>
          <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider opacity-80">
            Tous les cas
          </div>
        </button>
        {STATUS_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={cn(
              "rounded-lg border p-3 text-left transition-colors",
              active === s
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface hover:border-primary/40",
            )}
          >
            <div className="font-display text-2xl font-bold">{counts.get(s) ?? 0}</div>
            <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider opacity-80">
              {STATUS_LABEL[s]}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((v) => (
          <Card key={v.id} className="flex flex-col gap-4 p-5 shadow-card">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {v.victimName}
                </h3>
                {(v.profession || v.age) && (
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                    {v.profession}
                    {v.profession && v.age ? " · " : ""}
                    {v.age ? `${v.age} ans` : ""}
                  </p>
                )}
              </div>
              <StatusBadge status={v.status} />
            </div>
            <div className="space-y-1.5 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                {formatDate(v.date)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {v.location}
              </div>
            </div>
            <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
              {v.circumstances}
            </p>
            <div className="border-t border-border pt-3">
              <VerificationBadge level={v.verification} />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-foreground">
          « Ils avaient un nom. Nous le garderons. »
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Si vous êtes témoin, proche d'une victime, journaliste ou avocat, vous pouvez contribuer
          à enrichir ce mémorial via notre canal sécurisé. L'identité de toutes les sources est
          protégée sans exception.
        </p>
        <Button asChild className="mt-4">
          <Link to="/signalement">
            Transmettre un témoignage
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
