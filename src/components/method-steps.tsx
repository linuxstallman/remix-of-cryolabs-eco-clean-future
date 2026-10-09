import { useState } from "react";
import { Snowflake, Wind, Sparkles, Droplets } from "lucide-react";

const steps = [
  {
    icon: Snowflake,
    title: "Projection du CO₂ solide",
    short: "-78,5 °C",
    body: "Des pellets de neige carbonique sont accélérés par un flux d'air comprimé et projetés sur la surface à traiter. Aucun produit chimique, aucun solvant, aucune eau.",
  },
  {
    icon: Wind,
    title: "Choc thermique",
    short: "Fragilisation",
    body: "Au contact, la température chute brutalement. La salissure (graisse, peinture, suie, résidus) se contracte, se fragilise et se décolle du support, qui reste intact.",
  },
  {
    icon: Sparkles,
    title: "Effet cinétique & sublimation",
    short: "×800 volume",
    body: "Le pellet passe directement de l'état solide à l'état gazeux et augmente son volume d'environ 800 fois. Cette micro-explosion soulève la couche fragilisée sans abraser.",
  },
  {
    icon: Droplets,
    title: "Zéro déchet secondaire",
    short: "Sans eau",
    body: "La glace disparaît : il ne reste que la salissure décollée, à ramasser à sec. Pas de boues, pas d'eaux usées, pas de sable à évacuer.",
  },
];

export function MethodSteps() {
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0]!;
  const Current = current.icon;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <ol className="space-y-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive}
                className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${
                  isActive
                    ? "border-accent/60 bg-card shadow-frost"
                    : "border-border bg-secondary/40 hover:border-accent/40"
                }`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                    isActive
                      ? "bg-gradient-frost text-primary-foreground"
                      : "bg-background text-accent"
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape {i + 1} — {s.short}
                  </span>
                  <span className="block font-display text-base font-semibold">{s.title}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-glacier p-8">
        <div
          aria-hidden
          className="animate-sublimate pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-accent/25 blur-3xl"
        />
        <div key={active} className="animate-frost-rise relative">
          <span className="grid size-14 place-items-center rounded-2xl bg-gradient-frost text-primary-foreground shadow-frost">
            <Current className="size-7" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold">{current.title}</h3>
          <p className="mt-3 text-muted-foreground">{current.body}</p>

          <div className="mt-8 flex gap-1.5">
            {steps.map((s, i) => (
              <span
                key={s.title}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= active ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
