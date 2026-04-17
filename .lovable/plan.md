

# Vigie 224 — Observatoire Citoyen des Droits Humains

Plateforme civic tech de documentation, cartographie et signalement des incidents liés aux libertés publiques en Guinée. Ton : transparence et vigilance citoyenne (pas deuil radical).

## Design system

- **Palette** : Bleu nuit `#0B1120` (primaire/headers/texte), fond `slate-50` blanc cassé, accents drapeau guinéen pour statuts — **Vert** `#16A34A` (Libéré/Résolu), **Orange/Jaune** `#F59E0B` (Disparu/Kidnapping), **Rouge bordeaux** `#9F1239` (Décès/Tirs).
- **Typographie** : Inter (sans-serif, lisible sur mobile).
- **Mode** : Light par défaut + toggle dark mode.
- **Mobile-first** : menu burger, cards empilées, drawer pour filtres carte.
- **Logo** : intégration du logo Vigie 224 fourni dans le header.

## Architecture (modulaire, prête pour migration Astro Islands)

```
src/
  components/
    layout/        Header, Footer, MobileMenu, ThemeToggle
    home/          Hero, StatsCounters, MissionCards, CtaBanner
    registry/      IncidentCard, FilterBar, SearchInput, StatusBadge
    map/           MapPlaceholder, MapFilterDrawer, MapLegend
    report/        ReportForm, SecurityNotice, FileUploadField
    memorial/      VictimCard
  data/
    mockIncidents.ts    Données factices typées (Foniké Menguè, Thierno Diallo, Nene Diallo + victimes du PDF)
    mockUnits.ts        BATA, BAC, CMIS, GFS, GN
    types.ts            Incident, Victim, Unit, Source, Status
  services/
    api.ts              Fonctions fetch vides commentées pour NocoDB (getIncidents, getVictims, postReport…)
  routes/
    index.tsx           Dashboard
    registre.tsx        Registre factuel
    memorial.tsx        Mémorial des victimes
    cartographie.tsx    Carte interactive
    repression.tsx      Machine répressive (unités impliquées)
    signalement.tsx     Formulaire sécurisé
    a-propos.tsx        À propos / démarche
```

Chaque route a son propre `head()` (title, description, og:title, og:description) pour SEO et partage social.

## Pages

### 1. Accueil `/` — Dashboard
- **Hero** : "Cartographier les faits, Protéger nos droits." + sous-titre observation citoyenne indépendante.
- **3 compteurs animés** : Incidents documentés · Personnes disparues · Signalements citoyens.
- **3 cards mission** (icônes Lucide : Eye, FileText, Shield) : Observer · Documenter · Signaler.
- **CTA** : "Consulter la Carte" (primaire) + "Faire un signalement" (secondaire).

### 2. Registre `/registre` — Base de données factuelle
- Barre de recherche globale + filtres (Type d'incident, Statut, Période, Lieu).
- Vue **Data Cards** : Nom, Âge, Date, Lieu, Type de violation, badge statut coloré.
- Tri (date, lieu) + pagination.

### 3. Mémorial `/memorial` — Victimes & disparus
- Texte de présentation respectueux.
- Grille de **VictimCards** (extraites du PDF : Thierno Mamadou Diallo, Amadou Sow, Ibrahima Balde, Mamadou Bella Barry, Foniké Menguè, Nene Oussou Diallo, etc.).
- **Pas d'affichage des numéros de téléphone des familles** (sécurité).

### 4. Cartographie `/cartographie` — Interactive
- Conteneur pleine hauteur avec **placeholder carte riche** (légende, marqueurs colorés par statut, prêt pour Leaflet/MapLibre).
- **Sidebar desktop / Drawer mobile** : filtres Dates · Unités impliquées · Statuts · Type d'incident.
- Légende couleurs en bas/coin.

### 5. Machine répressive `/repression`
- Présentation factuelle de la fermeture de l'espace civique.
- Cards par unité (BATA, BAC, CMIS, GFS, GN) avec description et nombre d'incidents associés.

### 6. Signalement `/signalement` — Sécurisé
- Header rassurant (icône bouclier) + bandeau anonymisation des données.
- Formulaire : Type d'incident (Select), Lieu, Date, Description, Upload preuves (placeholder).
- Mention canal Signal/Telegram pour preuves sensibles.
- Bouton d'envoi avec icône cadenas.

### 7. À propos `/a-propos`
- Mission, démarche, hommage aux familles, mention TLP Guinée, méthodologie.

## Données factices (`data/mockIncidents.ts`)

TypeScript strict avec interfaces `Incident`, `Victim`, `Status` (`'décédé' | 'disparu' | 'libéré' | 'blessé' | 'détenu'`). Inclut les 3 cas du brief + ~8 cas extraits du PDF, chacun avec coordonnées GPS approximatives Conakry pour la carte.

## Services NocoDB (`services/api.ts`)

Fonctions stubs typées et commentées prêtes à brancher : `fetchIncidents()`, `fetchVictims()`, `fetchUnits()`, `submitReport()`, avec `BASE_URL` et `API_TOKEN` en variables d'environnement (commentaires explicatifs).

## Composants UI shadcn utilisés

Button, Card, Badge, Input, Select, Textarea, Dialog, Sheet (drawer mobile), Tabs, Separator, Tooltip, Sonner (toasts).

