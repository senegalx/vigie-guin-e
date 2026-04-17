import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { StatsCounters } from "@/components/home/StatsCounters";
import { MissionCards } from "@/components/home/MissionCards";
import { CtaBanner } from "@/components/home/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigie 224 — Observatoire Citoyen des Droits Humains en Guinée" },
      {
        name: "description",
        content:
          "Cartographier les faits, protéger nos droits. Plateforme citoyenne indépendante d'observation, de documentation et de signalement en Guinée.",
      },
      {
        property: "og:title",
        content: "Vigie 224 — Cartographier les faits, protéger nos droits",
      },
      {
        property: "og:description",
        content:
          "Observatoire citoyen indépendant. Documentation factuelle des incidents liés aux libertés publiques en Guinée.",
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
