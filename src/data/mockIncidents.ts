import type { Incident } from "./types";

/**
 * Données factices pour le prototype.
 * Sources : témoignages publics, rapports TLP Guinée, presse indépendante.
 * Coordonnées GPS approximatives (Conakry) — à vérifier en production.
 */
export const mockIncidents: Incident[] = [
  {
    id: "inc-001",
    victimName: "Oumar Sylla (Foniké Menguè)",
    profession: "Coordinateur FNDC",
    status: "disparu",
    type: "Kidnapping nocturne",
    date: "2024-07-09",
    location: "Hafia-Minière, Conakry",
    coordinates: { lat: 9.5439, lng: -13.6773 },
    circumstances:
      "Enlevé à son domicile dans la nuit par une équipe mixte armée. Aucune information officielle sur son lieu de détention depuis cette date.",
    unitsInvolved: ["GFS", "INCONNU"],
  },
  {
    id: "inc-002",
    victimName: "Thierno Mamadou Diallo",
    age: 19,
    profession: "Élève",
    status: "décédé",
    type: "Tir par balle",
    date: "2022-06-01",
    location: "Hamdallaye Prince, Conakry",
    coordinates: { lat: 9.5689, lng: -13.6478 },
    circumstances:
      "Touché par balle lors d'une manifestation contre la transition. Décédé sur place.",
    unitsInvolved: ["GN", "CMIS"],
  },
  {
    id: "inc-003",
    victimName: "Nene Oussou Diallo",
    status: "disparu",
    type: "Enlèvement à domicile",
    date: "2026-01-09",
    location: "Gbessia, Conakry",
    coordinates: { lat: 9.5785, lng: -13.6125 },
    circumstances:
      "Enlevée à son domicile par des hommes encagoulés à bord d'un véhicule banalisé. Aucune nouvelle depuis.",
    unitsInvolved: ["INCONNU"],
  },
  {
    id: "inc-004",
    victimName: "Amadou Sow",
    profession: "Travailleur",
    status: "décédé",
    type: "Décès en détention",
    date: "2022-07-30",
    location: "Hamdallaye 1, Conakry",
    coordinates: { lat: 9.5705, lng: -13.6491 },
    circumstances:
      "Arrêté à Hamdallaye 1, décédé quelques heures après sa libération dans des circonstances troubles.",
    unitsInvolved: ["BAC"],
  },
  {
    id: "inc-005",
    victimName: "Ibrahima Balde",
    status: "décédé",
    type: "Tir par balle",
    date: "2022-08-17",
    location: "Wanindara, Conakry",
    coordinates: { lat: 9.6195, lng: -13.6112 },
    circumstances:
      "Tué par balles lors d'une opération de maintien de l'ordre dans son quartier.",
    unitsInvolved: ["BATA", "GN"],
  },
  {
    id: "inc-006",
    victimName: "Mamadou Bella Barry",
    status: "décédé",
    type: "Tir par balle",
    date: "2022-07-29",
    location: "Hamdallaye, Conakry",
    coordinates: { lat: 9.5712, lng: -13.6485 },
    circumstances:
      "Mort par balle lors d'une manifestation dans le quartier de Hamdallaye.",
    unitsInvolved: ["GN"],
  },
  {
    id: "inc-007",
    victimName: "Mamadou Billo Bah",
    profession: "Cadre FNDC",
    status: "disparu",
    type: "Kidnapping nocturne",
    date: "2024-07-09",
    location: "Hafia-Minière, Conakry",
    coordinates: { lat: 9.5442, lng: -13.6776 },
    circumstances:
      "Enlevé la même nuit que Foniké Menguè par une équipe mixte armée. Sort inconnu.",
    unitsInvolved: ["GFS", "INCONNU"],
  },
  {
    id: "inc-008",
    victimName: "Étudiant — Identité protégée",
    age: 22,
    profession: "Étudiant",
    status: "blessé",
    type: "Manifestation réprimée",
    date: "2023-02-27",
    location: "Cosa, Conakry",
    coordinates: { lat: 9.6067, lng: -13.624 },
    circumstances:
      "Touché à la jambe lors d'une opération de dispersion. Identité protégée à la demande de la famille.",
    unitsInvolved: ["CMIS"],
  },
  {
    id: "inc-009",
    victimName: "Habitant — Identité protégée",
    status: "détenu",
    type: "Détention arbitraire",
    date: "2024-03-12",
    location: "Bambeto, Conakry",
    coordinates: { lat: 9.5912, lng: -13.6343 },
    circumstances:
      "Arrêté lors d'une descente nocturne. Détention prolongée sans présentation à un juge.",
    unitsInvolved: ["BAC", "GN"],
  },
  {
    id: "inc-010",
    victimName: "Militant — Identité protégée",
    profession: "Militant associatif",
    status: "libéré",
    type: "Détention arbitraire",
    date: "2023-11-04",
    location: "Kaloum, Conakry",
    coordinates: { lat: 9.5092, lng: -13.7122 },
    circumstances:
      "Détenu pendant 21 jours puis libéré sans charge. Aucune justification fournie.",
    unitsInvolved: ["GN"],
  },
  {
    id: "inc-011",
    victimName: "Jeune — Identité protégée",
    age: 17,
    profession: "Élève",
    status: "décédé",
    type: "Tir par balle",
    date: "2023-05-10",
    location: "Sonfonia, Conakry",
    coordinates: { lat: 9.6342, lng: -13.5908 },
    circumstances:
      "Touché par balle perdue lors d'affrontements entre forces de l'ordre et manifestants.",
    unitsInvolved: ["GN", "BAC"],
  },
];
