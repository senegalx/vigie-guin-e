// Types partagés pour la plateforme Vigie 224.
// Conçus pour être directement compatibles avec les tables NocoDB
// (Victimes, Incidents_et_Manifestations, Unites_Impliquees, Sources_et_Preuves).

export type IncidentStatus =
  | "décédé"
  | "disparu"
  | "libéré"
  | "blessé"
  | "détenu";

export type IncidentType =
  | "Tir par balle"
  | "Kidnapping nocturne"
  | "Enlèvement à domicile"
  | "Disparition forcée"
  | "Manifestation réprimée"
  | "Détention arbitraire"
  | "Décès en détention";

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
