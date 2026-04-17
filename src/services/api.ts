/**
 * Services API — connexion future à NocoDB.
 *
 * NocoDB expose une API REST par table. Les fonctions ci-dessous sont des
 * stubs prêts à être branchés. Elles renvoient actuellement les données
 * factices afin de permettre le développement de l'UI sans backend.
 *
 * Variables d'environnement attendues (à définir lors de la mise en prod) :
 *   - VITE_NOCODB_BASE_URL   : ex. https://nocodb.exemple.org/api/v2
 *   - VITE_NOCODB_API_TOKEN  : token d'API NocoDB (lecture seule pour le front public)
 *
 * IMPORTANT — Sécurité :
 *  - Les champs sensibles (numéros de téléphone des familles, identités complètes
 *    de témoins, etc.) NE DOIVENT PAS être exposés via le token public.
 *  - Utiliser des "Views" filtrées dans NocoDB pour limiter les colonnes retournées.
 */

import { mockIncidents } from "@/data/mockIncidents";
import { mockUnits } from "@/data/mockUnits";
import type { Incident, Unit } from "@/data/types";

// const BASE_URL = import.meta.env.VITE_NOCODB_BASE_URL ?? "";
// const API_TOKEN = import.meta.env.VITE_NOCODB_API_TOKEN ?? "";

// async function nocoFetch<T>(path: string): Promise<T> {
//   const res = await fetch(`${BASE_URL}${path}`, {
//     headers: { "xc-token": API_TOKEN },
//   });
//   if (!res.ok) throw new Error(`NocoDB error: ${res.status}`);
//   return (await res.json()) as T;
// }

/** Récupère la liste publique des incidents documentés. */
export async function fetchIncidents(): Promise<Incident[]> {
  // return nocoFetch<{ list: Incident[] }>("/tables/Incidents/records").then(r => r.list);
  return Promise.resolve(mockIncidents);
}

/** Récupère le détail d'un incident par son identifiant. */
export async function fetchIncidentById(id: string): Promise<Incident | undefined> {
  // return nocoFetch<Incident>(`/tables/Incidents/records/${id}`);
  return Promise.resolve(mockIncidents.find((i) => i.id === id));
}

/** Récupère la liste publique des victimes (peut être un alias d'incidents selon le schéma). */
export async function fetchVictims(): Promise<Incident[]> {
  // return nocoFetch<{ list: Incident[] }>("/tables/Victimes/records").then(r => r.list);
  return Promise.resolve(mockIncidents);
}

/** Récupère la liste des unités impliquées documentées. */
export async function fetchUnits(): Promise<Unit[]> {
  // return nocoFetch<{ list: Unit[] }>("/tables/Unites/records").then(r => r.list);
  return Promise.resolve(mockUnits);
}

export interface ReportPayload {
  incidentType: string;
  location: string;
  date: string;
  description: string;
  // Les fichiers seront uploadés via un endpoint dédié (signed URL).
  evidenceFileNames?: string[];
}

/**
 * Soumet un signalement citoyen anonyme.
 * En production : POST vers une edge function qui valide, anonymise et stocke
 * dans une table NocoDB privée (non exposée via le token public).
 */
export async function submitReport(_payload: ReportPayload): Promise<{ ok: true }> {
  // const res = await fetch(`${BASE_URL}/reports`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(_payload),
  // });
  // if (!res.ok) throw new Error("Échec de l'envoi du signalement");
  return Promise.resolve({ ok: true });
}
