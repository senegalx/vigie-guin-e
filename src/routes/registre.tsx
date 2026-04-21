import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IncidentCard } from "@/components/registry/IncidentCard";
import { mockIncidents } from "@/data/mockIncidents";
import { STATUS_OPTIONS, STATUS_LABEL } from "@/components/registry/StatusBadge";
import { VERIFICATION_LEVELS } from "@/components/registry/VerificationBadge";
import type { IncidentStatus, IncidentType, VerificationLevel } from "@/data/types";

export const Route = createFileRoute("/registre")({
  head: () => ({
    meta: [
      { title: "Registre factuel — Vigie 224" },
      {
        name: "description",
        content:
          "Base de données des cas documentés : recherche, filtres par catégorie, type d'incident et niveau de vérification.",
      },
      { property: "og:title", content: "Registre factuel — Vigie 224" },
      {
        property: "og:description",
        content:
          "Recensement des cas documentés sous le régime du CNRD en Guinée. Recherche et filtres avancés.",
      },
    ],
  }),
  component: RegistryPage,
});

const verifLabel: Record<VerificationLevel, string> = {
  vérifié: "Vérifié",
  en_cours: "En cours de vérification",
  non_vérifié: "Témoignage non vérifié",
};

function RegistryPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<IncidentStatus | "all">("all");
  const [typeFilter, setTypeFilter] = useState<IncidentType | "all">("all");
  const [verifFilter, setVerifFilter] = useState<VerificationLevel | "all">("all");

  const filtered = useMemo(() => {
    return mockIncidents.filter((inc) => {
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        inc.victimName.toLowerCase().includes(q) ||
        inc.location.toLowerCase().includes(q) ||
        inc.type.toLowerCase().includes(q);
      const matchS = statusFilter === "all" || inc.status === statusFilter;
      const matchT = typeFilter === "all" || inc.type === typeFilter;
      const matchV = verifFilter === "all" || inc.verification === verifFilter;
      return matchQ && matchS && matchT && matchV;
    });
  }, [query, statusFilter, typeFilter, verifFilter]);

  const types = Array.from(new Set(mockIncidents.map((i) => i.type)));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Base de données factuelle
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Registre des cas documentés
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Chaque entrée mentionne explicitement son niveau de vérification. Identités sensibles
          protégées lorsque nécessaire pour la sécurité des familles.
        </p>
      </header>

      <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par nom, lieu ou type d'incident…"
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as never)}>
          <SelectTrigger className="lg:w-[200px]">
            <SlidersHorizontal className="h-4 w-4" />
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {STATUS_OPTIONS.map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_LABEL[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v as never)}>
          <SelectTrigger className="lg:w-[200px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={verifFilter} onValueChange={(v) => setVerifFilter(v as never)}>
          <SelectTrigger className="lg:w-[200px]">
            <SelectValue placeholder="Vérification" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous niveaux</SelectItem>
            {VERIFICATION_LEVELS.map((v) => (
              <SelectItem key={v} value={v}>
                {verifLabel[v]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{filtered.length}</span> cas affiché
        {filtered.length > 1 ? "s" : ""}.
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((inc) => (
          <IncidentCard key={inc.id} incident={inc} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Aucun cas ne correspond à vos critères.
        </div>
      )}
    </div>
  );
}
