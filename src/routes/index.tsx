import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { StatsCounters } from "@/components/home/StatsCounters";
import { MissionCards } from "@/components/home/MissionCards";
import { CtaBanner } from "@/components/home/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigie 224 — Mémorial digital des victimes du CNRD en Guinée" },
      {
        name: "description",
        content:
          "Plateforme indépendante recensant les personnes tuées, enlevées, kidnappées, disparues, exilées et les prisonniers politiques sous le régime du CNRD depuis le 5 septembre 2021.",
      },
      {
        property: "og:title",
        content: "Mémorial digital des victimes du CNRD — Vigie 224",
      },
      {
        property: "og:description",
        content:
          "« Ils avaient un nom. Nous le garderons. » Cartographier les faits, protéger la mémoire des victimes de la répression en Guinée.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounters />
      <MissionCards />
      <CtaBanner />
    </>
  );
}
