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
import type { IncidentStatus, IncidentType } from "@/data/types";

export const Route = createFileRoute("/registre")({
  head: () => ({
    meta: [
      { title: "Registre factuel — Vigie 224" },
      {
        name: "description",
        content:
          "Base de données des incidents documentés : recherche, filtres et fiches factuelles vérifiées.",
      },
      { property: "og:title", content: "Registre factuel — Vigie 224" },
      {
        property: "og:description",
        content:
          "Recensement vérifié des incidents liés aux libertés publiques en Guinée. Recherche et filtres avancés.",
      },
    ],
  }),
  component: RegistryPage,
});

function RegistryPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<IncidentStatus | "all">("all");
  const [typeFilter, setTypeFilter] = useState<IncidentType | "all">("all");

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
      return matchQ && matchS && matchT;
    });
  }, [query, statusFilter, typeFilter]);

  const types = Array.from(new Set(mockIncidents.map((i) => i.type)));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Base de données factuelle
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Registre des incidents documentés
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Chaque entrée a fait l'objet d'une vérification croisée. Identités sensibles protégées
          lorsque nécessaire pour la sécurité des familles.
        </p>
      </header>

      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
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
          <SelectTrigger className="sm:w-[180px]">
            <SlidersHorizontal className="h-4 w-4" />
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="décédé">Décès</SelectItem>
            <SelectItem value="disparu">Disparition</SelectItem>
            <SelectItem value="détenu">Détention</SelectItem>
            <SelectItem value="blessé">Blessé</SelectItem>
            <SelectItem value="libéré">Libéré</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v as never)}>
          <SelectTrigger className="sm:w-[220px]">
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
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{filtered.length}</span> incident
        {filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}.
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((inc) => (
          <IncidentCard key={inc.id} incident={inc} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Aucun incident ne correspond à vos critères.
        </div>
      )}
    </div>
  );
}
