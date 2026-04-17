import type { Unit } from "./types";

export const mockUnits: Unit[] = [
  {
    code: "BATA",
    fullName: "Bataillon Autonome des Troupes Aéroportées",
    type: "Militaire",
    description:
      "Unité militaire d'élite régulièrement citée dans les opérations de maintien de l'ordre lors de manifestations réprimées à Conakry.",
  },
  {
    code: "BAC",
    fullName: "Brigade Anticriminalité",
    type: "Police",
    description:
      "Unité de police mobilisée lors d'arrestations ciblées et d'opérations dans les quartiers de la haute banlieue.",
  },
  {
    code: "CMIS",
    fullName: "Compagnie Mobile d'Intervention et de Sécurité",
    type: "Police",
    description:
      "Unité spécialisée dans le contrôle de foules, fréquemment déployée lors de manifestations.",
  },
  {
    code: "GFS",
    fullName: "Groupement des Forces Spéciales",
    type: "Forces Spéciales",
    description:
      "Forces spéciales rattachées à la présidence, citées dans des opérations nocturnes ciblant des figures de la société civile.",
  },
  {
    code: "GN",
    fullName: "Gendarmerie Nationale",
    type: "Gendarmerie",
    description:
      "Force régulière de gendarmerie, présente dans la plupart des dispositifs de maintien de l'ordre.",
  },
  {
    code: "INCONNU",
    fullName: "Hommes non identifiés",
    type: "Hommes non identifiés",
    description:
      "Hommes armés, parfois encagoulés, opérant à bord de véhicules sans plaques. Identité institutionnelle non confirmée par les témoins.",
  },
];
