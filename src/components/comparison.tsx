import { useState } from "react";
import { Check, Minus, X } from "lucide-react";

const methods = [
  { id: "hp", label: "Haute pression" },
  { id: "sablage", label: "Sablage abrasif" },
  { id: "chimie", label: "Solvants chimiques" },
  { id: "cryo", label: "Cryogénie CO₂" },
] as const;

type Score = "good" | "mid" | "bad";

const rows: { criterion: string; values: Record<string, { score: Score; note: string }> }[] = [
  {
    criterion: "Consommation d'eau",
    values: {
      hp: { score: "bad", note: "Très élevée" },
      sablage: { score: "good", note: "Aucune" },
      chimie: { score: "mid", note: "Rinçage requis" },
      cryo: { score: "good", note: "Aucune" },
    },
  },
  {
    criterion: "Déchet secondaire",
    values: {
      hp: { score: "bad", note: "Eaux usées" },
      sablage: { score: "bad", note: "Sable + poussière" },
      chimie: { score: "bad", note: "Effluents traités" },
      cryo: { score: "good", note: "Aucun" },
    },
  },
  {
    criterion: "Agressivité du support",
    values: {
      hp: { score: "mid", note: "Peut infiltrer" },
      sablage: { score: "bad", note: "Abrasif" },
      chimie: { score: "mid", note: "Attaque certains matériaux" },
      cryo: { score: "good", note: "Non abrasif" },
    },
  },
  {
    criterion: "Supports fragiles (alu, bois, plastique)",
    values: {
      hp: { score: "mid", note: "Avec précaution" },
      sablage: { score: "bad", note: "Déconseillé" },
      chimie: { score: "bad", note: "Risque de corrosion" },
      cryo: { score: "good", note: "Adapté" },
    },
  },
  {
    criterion: "Nettoyage sans démontage",
    values: {
      hp: { score: "bad", note: "Rarement" },
      sablage: { score: "bad", note: "Non" },
      chimie: { score: "mid", note: "Parfois" },
      cryo: { score: "good", note: "Fréquent" },
    },
  },
  {
    criterion: "Temps de séchage",
    values: {
      hp: { score: "bad", note: "Long" },
      sablage: { score: "good", note: "Nul" },
      chimie: { score: "mid", note: "Variable" },
      cryo: { score: "good", note: "Nul, procédé à sec" },
    },
  },
  {
    criterion: "Sécurité opérateur",
    values: {
      hp: { score: "mid", note: "Projections" },
      sablage: { score: "bad", note: "Poussières fines" },
      chimie: { score: "bad", note: "Vapeurs nocives" },
      cryo: { score: "mid", note: "Bruit + ventilation" },
    },
  },
];

const scoreStyles: Record<Score, { icon: typeof Check; className: string }> = {
  good: { icon: Check, className: "bg-eco/12 text-eco" },
  mid: { icon: Minus, className: "bg-accent/12 text-accent-foreground" },
  bad: { icon: X, className: "bg-destructive/10 text-destructive" },
};

export function ComparisonTable() {
  const [highlight, setHighlight] = useState<string>("cryo");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {methods.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setHighlight(m.id)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              highlight === m.id
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-border bg-card">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <caption className="sr-only">Comparaison des méthodes de nettoyage industriel</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="px-5 py-4 text-left font-display font-semibold">
                Critère
              </th>
              {methods.map((m) => (
                <th
                  key={m.id}
                  scope="col"
                  className={`px-5 py-4 text-left font-display font-semibold transition-colors ${
                    highlight === m.id ? "bg-frost text-primary" : ""
                  }`}
                >
                  {m.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.criterion} className="border-b border-border/70 last:border-0">
                <th scope="row" className="px-5 py-4 text-left font-medium">
                  {r.criterion}
                </th>
                {methods.map((m) => {
                  const cell = r.values[m.id] ?? { score: "mid" as Score, note: "—" };
                  const { icon: Icon, className } = scoreStyles[cell.score];

                  return (
                    <td
                      key={m.id}
                      className={`px-5 py-4 align-top transition-colors ${
                        highlight === m.id ? "bg-frost/60" : ""
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${className}`}
                        >
                          <Icon className="size-3" />
                        </span>
                        <span className="text-muted-foreground">{cell.note}</span>
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
