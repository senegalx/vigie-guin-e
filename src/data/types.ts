// Types partagés pour la plateforme Vigie 224 — Mémorial digital des victimes du CNRD.
// Conçus pour être directement compatibles avec les tables NocoDB
// (Victimes, Incidents_et_Manifestations, Unites_Impliquees, Sources_et_Preuves).

/**
 * Six catégories officielles de documentation du mémorial.
 */
export type IncidentStatus =
  | "tué"
  | "enlevé"
  | "kidnappé"
  | "disparu"
  | "exilé"
  | "prisonnier_politique";

/**
 * Niveau de vérification éditorial.
 * - vérifié : ≥ 2 sources indépendantes ou document officiel
 * - en_cours : témoignage reçu, vérification en cours
 * - non_vérifié : source unique, publié pour mémoire
 */
export type VerificationLevel = "vérifié" | "en_cours" | "non_vérifié";

export type IncidentType =
  | "Tir par balle"
  | "Kidnapping nocturne"
  | "Enlèvement à domicile"
  | "Disparition forcée"
  | "Manifestation réprimée"
  | "Détention arbitraire"
  | "Décès en détention"
  | "Exil forcé"
  | "Emprisonnement politique";

export type UnitCode = "BATA" | "BAC" | "CMIS" | "GFS" | "GN" | "INCONNU";

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Unit {
  code: UnitCode;
  fullName: string;
  type:
    | "Militaire"
    | "Gendarmerie"
    | "Police"
    | "Forces Spéciales"
    | "Hommes non identifiés";
  description: string;
}

export interface Incident {
  id: string;
  victimName: string;
  age?: number;
  profession?: string;
  status: IncidentStatus;
  verification: VerificationLevel;
  type: IncidentType;
  date: string; // ISO
  location: string; // Quartier / Commune
  coordinates: GeoPoint;
  circumstances: string;
  unitsInvolved: UnitCode[];
  /**
   * Donnée sensible — uniquement pour usage interne / suivi.
   * NE JAMAIS afficher publiquement.
   */
  familyContactPrivate?: string;
}
