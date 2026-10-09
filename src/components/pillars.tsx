import { Leaf, ShieldCheck, Recycle, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Écologique",
    body: "Zéro chimie, zéro solvant, zéro eau. Le CO₂ utilisé est un gaz recyclé, issu de processus industriels existants.",
  },
  {
    icon: ShieldCheck,
    title: "Non abrasif",
    body: "Respecte les supports fragiles : aluminium, bois, plastique, pierre, moules et pièces de collection.",
  },
  {
    icon: Recycle,
    title: "Zéro déchet secondaire",
    body: "Pas de boues, pas d'eaux usées, pas de sable à évacuer. Seule la salissure décollée reste à ramasser.",
  },
  {
    icon: Gauge,
    title: "Rapidité & sécurité",
    body: "Nettoyage souvent réalisable sans démontage, à froid, sans étincelle et sans temps de séchage.",
  },
];

export function Pillars() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p) => {
        const Icon = p.icon;
        return (
          <article key={p.title} className="card-frost p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-frost text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </article>
        );
      })}
    </div>
  );
}
