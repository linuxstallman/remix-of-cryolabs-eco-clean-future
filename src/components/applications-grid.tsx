import { Car, Landmark, Factory, Wrench, Wheat } from "lucide-react";

export const applications = [
  {
    icon: Car,
    title: "Restauration automobile & motos anciennes",
    body: "Décapage de châssis, blocs moteurs, carters et jantes sans rayer l'aluminium ni détremper les mécaniques.",
  },
  {
    icon: Landmark,
    title: "Patrimoine & monuments",
    body: "Retrait des suies, mousses, graffitis et vernis vieillis sur pierre, brique et boiseries anciennes.",
  },
  {
    icon: Factory,
    title: "Maintenance industrielle",
    body: "Nettoyage de machines en place, souvent à chaud et sans démontage : moins d'arrêt de production.",
  },
  {
    icon: Wrench,
    title: "Dégraissage d'outillages",
    body: "Moules d'injection, presses, engrenages et outillages de production remis à nu sans solvant.",
  },
  {
    icon: Wheat,
    title: "Agroalimentaire",
    body: "Le CO₂ est bactériostatique et le procédé se fait à sec : idéal sur convoyeurs et lignes de production.",
  },
];

export function ApplicationsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {applications.map((a) => {
        const Icon = a.icon;
        return (
          <article key={a.title} className="card-frost group overflow-hidden p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-frost text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
          </article>
        );
      })}
    </div>
  );
}
