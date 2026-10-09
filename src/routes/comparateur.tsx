import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section";
import { ComparisonTable } from "@/components/comparison";

export const Route = createFileRoute("/comparateur")({
  head: () => ({
    meta: [
      { title: "Comparateur des méthodes de nettoyage — Cryolabs" },
      {
        name: "description",
        content:
          "Haute pression, sablage abrasif, solvants chimiques ou cryogénie CO₂ : comparez eau consommée, déchets, abrasivité et sécurité.",
      },
      { property: "og:title", content: "Comparateur des méthodes de nettoyage — Cryolabs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Un tableau interactif pour choisir la méthode adaptée à votre support et à votre chantier.",
      },
    ],
  }),
  component: ComparateurPage,
});

function ComparateurPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-glacier">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Comparateur"
            title="Quelle méthode pour quel chantier ?"
            intro="Aucune technique n'est universelle. Sélectionnez une méthode pour la mettre en évidence et confronter les critères qui comptent vraiment."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <ComparisonTable />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Ce que la cryogénie remplace bien",
              d: "Les solvants de dégraissage et le sablage léger sur supports fragiles ou pièces montées.",
            },
            {
              t: "Ce qu'elle ne remplace pas",
              d: "Le décapage d'une corrosion profonde ou la préparation d'un support avant métallisation.",
            },
            {
              t: "Notre position d'association",
              d: "Recommander la méthode juste, même quand ce n'est pas la nôtre. La pédagogie avant la promotion.",
            },
          ].map((c) => (
            <article key={c.t} className="card-frost p-6">
              <h3 className="font-display text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
