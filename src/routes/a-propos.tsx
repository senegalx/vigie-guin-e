import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Eye,
  FileText,
  Shield,
  Heart,
  CheckCircle2,
  Search,
  Lock,
  Users,
  Skull,
  UserMinus,
  UserX,
  EyeOff,
  Plane,
  Gavel,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Mémorial digital des victimes du CNRD" },
      {
        name: "description",
        content:
          "Pourquoi ce mémorial existe, nos six catégories de documentation, notre démarche de vérification et nos principes éditoriaux.",
      },
      { property: "og:title", content: "À propos du Mémorial — Vigie 224" },
      {
        property: "og:description",
        content:
          "« Ils avaient un nom. Nous le garderons. » Collectif anonyme d'activistes guinéens des droits humains.",
      },
    ],
  }),
  component: AboutPage,
});

const categories = [
  {
    icon: Skull,
    title: "Personnes tuées",
    text: "Décès directement imputables à des agents de l'État, des forces armées ou des groupes agissant sous leur autorité.",
  },
  {
    icon: UserMinus,
    title: "Personnes enlevées",
    text: "Individus emmenés de force par des acteurs étatiques ou paraétatiques, sans procédure légale ni notification aux familles.",
  },
  {
    icon: UserX,
    title: "Personnes kidnappées",
    text: "Victimes d'enlèvements politiques, dont les auteurs sont identifiés ou fortement présumés liés au pouvoir.",
  },
  {
    icon: EyeOff,
    title: "Personnes portées disparues",
    text: "Individus dont on a perdu toute trace après un contact avec des agents de l'État, et dont le sort reste inconnu.",
  },
  {
    icon: Plane,
    title: "Personnes exilées",
    text: "Citoyens contraints de fuir la Guinée en raison de menaces directes, poursuites politiques ou risques graves pour leur sécurité.",
  },
  {
    icon: Gavel,
    title: "Prisonniers politiques",
    text: "Personnes détenues en raison de leurs opinions, activités militantes, syndicales, journalistiques ou d'opposition.",
  },
];

const verifLevels = [
  {
    icon: CheckCircle2,
    label: "Vérifié",
    color: "text-verif-confirmed bg-verif-confirmed/10 border-verif-confirmed/30",
    text: "Le cas a été corroboré par au moins deux sources indépendantes ou par un document officiel (acte de décès, jugement, rapport d'ONG accréditée).",
  },
  {
    icon: Search,
    label: "En cours de vérification",
    color: "text-verif-pending bg-verif-pending/10 border-verif-pending/30",
    text: "Le témoignage est reçu et en attente de confirmation. Des démarches de vérification sont en cours.",
  },
  {
    icon: FileText,
    label: "Témoignage non vérifié",
    color: "text-verif-unverified bg-verif-unverified/10 border-verif-unverified/40",
    text: "Le récit provient d'une seule source. Il est publié dans un souci de mémoire, avec mention explicite de son statut non corroboré.",
  },
];

const principles = [
  "La dignité des victimes avant tout : chaque fiche est rédigée avec respect pour la personne et ses proches.",
  "La neutralité factuelle : nous documentons les faits tels que rapportés, sans jugement.",
  "Le consentement éclairé : aucun témoignage n'est publié sans l'accord de la source ou d'un proche.",
  "La sécurité des sources : toute information identifiante est supprimée ou anonymisée avant publication.",
  "La rectification : toute erreur portée à notre connaissance fait l'objet d'une correction visible et documentée.",
  "La pérennité : ce mémorial a vocation à durer comme archive de référence pour la justice transitionnelle.",
];

function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Notre démarche
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pourquoi ce mémorial existe
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Le 5 septembre 2021, le Comité National du Rassemblement et du Développement (CNRD)
          s'emparait du pouvoir en Guinée par un coup d'État militaire. Depuis ce jour, des hommes
          et des femmes ont été tués, enlevés, emprisonnés pour leurs opinions politiques,
          contraints à l'exil, ou ont simplement disparu sans que leurs familles n'en sachent la
          raison ni la destination.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ces personnes ont un nom. Elles ont une histoire. Elles ont des proches qui attendent,
          qui cherchent, qui souffrent. Ce mémorial digital a été créé pour que leur existence ne
          soit pas effacée, et que chaque victime demeure un être humain à part entière, et non un
          simple chiffre dans un rapport.
        </p>

        <blockquote className="mt-8 rounded-r-lg border-l-4 border-status-missing bg-surface p-5 font-display text-lg italic text-foreground shadow-card">
          « Tant qu'il reste un témoin pour nommer les victimes, les bourreaux n'auront pas le
          dernier mot. »
        </blockquote>
      </header>

      {/* 3 piliers méthodologiques */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Eye, title: "Observer", text: "Veille continue de l'espace civique." },
          { icon: FileText, title: "Documenter", text: "Croisement de sources, archivage durable." },
          { icon: Shield, title: "Protéger", text: "Anonymisation systématique des sources." },
        ].map((m) => {
          const Icon = m.icon;
          return (
            <Card key={m.title} className="p-5 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.text}</p>
            </Card>
          );
        })}
      </div>

      {/* Six catégories */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Nos six catégories de documentation
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Toutes les personnes affectées par la répression du CNRD depuis le 5 septembre 2021,
          réparties en six catégories :
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="flex gap-4 p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Démarche de vérification */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Notre démarche de vérification
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Nous adoptons une politique de transparence totale sur le statut de chaque cas publié.
          Tous les témoignages reçus peuvent être publiés, avec l'accord de la source, mais chacun
          est accompagné d'une mention claire indiquant son niveau de vérification.
        </p>
        <div className="mt-6 space-y-3">
          {verifLevels.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className={`flex items-start gap-4 rounded-lg border p-4 ${v.color}`}
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <div className="font-display font-semibold">{v.label}</div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
          Dans un contexte de répression où les autorités nient systématiquement les faits,
          attendre une vérification parfaite revient souvent à condamner les témoignages au
          silence. Nous choisissons la transparence plutôt que l'omission.
        </p>
      </section>

      {/* Qui sommes-nous */}
      <section className="mt-16 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Qui sommes-nous</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ce mémorial est porté par un collectif d'activistes guinéens des droits humains, en
              Guinée et de la diaspora. Nous opérons sous anonymat complet pour protéger la
              sécurité des membres de notre équipe, de nos sources et des familles de victimes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              L'identité des contributeurs ne sera jamais divulguée. Cette décision n'est pas un
              choix de facilité, c'est une nécessité imposée par le contexte : en Guinée sous le
              CNRD, documenter les abus peut coûter la liberté, voire la vie.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nous nous engageons néanmoins à rendre compte publiquement de notre méthodologie,
              afin que notre travail puisse être évalué sur sa rigueur et non sur nos noms.
            </p>
          </div>
        </div>
      </section>

      {/* Principes éditoriaux */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Nos principes éditoriaux
        </h2>
        <ol className="mt-6 space-y-3">
          {principles.map((p, i) => (
            <li key={i} className="flex gap-4 rounded-lg border border-border bg-surface p-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed text-foreground">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contribuer */}
      <section className="mt-16 rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
            <Heart className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Comment contribuer</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Si vous êtes témoin d'un fait, membre d'une famille de victime, journaliste, avocat
              ou travailleur humanitaire, vous pouvez nous transmettre un témoignage via notre
              formulaire sécurisé. Nous protégeons l'identité de toutes nos sources sans exception.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Vous pouvez également contribuer à la vérification de cas existants, à la traduction
              de documents, ou au soutien financier de notre infrastructure numérique sécurisée.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/signalement">
                  <Lock className="h-4 w-4" />
                  Transmettre un témoignage
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/memorial">Consulter le mémorial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-12 text-center font-display text-base italic text-muted-foreground">
        Ce mémorial ne juge pas, il témoigne. Il ne condamne pas, il nomme. Il ne politique pas,
        il humanise.
      </p>
      <p className="mt-2 text-center font-display text-xl font-bold text-foreground">
        « Ils avaient un nom. Nous le garderons. »
      </p>
    </div>
  );
}
