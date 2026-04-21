import { useEffect, useRef, useState } from "react";
import { Skull, EyeOff, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockIncidents } from "@/data/mockIncidents";

interface Stat {
  label: string;
  value: number;
  icon: typeof Skull;
  accent: string;
}

const killed = mockIncidents.filter((i) => i.status === "tué").length;
const missing = mockIncidents.filter(
  (i) => i.status === "disparu" || i.status === "enlevé" || i.status === "kidnappé",
).length;
const total = mockIncidents.length;

const stats: Stat[] = [
  {
    label: "Personnes tuées documentées",
    value: killed,
    icon: Skull,
    accent: "text-status-deceased",
  },
  {
    label: "Enlevés, kidnappés, disparus",
    value: missing,
    icon: EyeOff,
    accent: "text-status-missing",
  },
  {
    label: "Cas recensés au mémorial",
    value: total,
    icon: Megaphone,
    accent: "text-primary",
  },
];

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{n.toLocaleString("fr-FR")}</span>;
}

export function StatsCounters() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Chiffres clés du mémorial
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Depuis le 5 septembre 2021, des centaines de Guinéens broyés par la répression.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Au moins 70 personnes tuées par les forces de défense et de sécurité entre 2022 et 2025
          selon les coalitions de la société civile. Les chiffres ci-dessous concernent les cas
          actuellement publiés sur la plateforme.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.label}
              className="relative overflow-hidden p-6 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-lg bg-muted p-2.5 ${s.accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Counter to={s.value} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
