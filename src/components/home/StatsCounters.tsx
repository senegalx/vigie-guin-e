import { useEffect, useRef, useState } from "react";
import { FileText, Users, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: typeof FileText;
  accent: string;
}

const stats: Stat[] = [
  {
    label: "Incidents documentés",
    value: 142,
    icon: FileText,
    accent: "text-primary",
  },
  {
    label: "Personnes disparues",
    value: 23,
    icon: Users,
    accent: "text-status-missing",
  },
  {
    label: "Signalements citoyens",
    value: 387,
    icon: Megaphone,
    accent: "text-status-resolved",
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
          // easeOutCubic
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
      <div className="grid gap-4 sm:grid-cols-3">
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
