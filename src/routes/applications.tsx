import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section";
import { ApplicationsGrid } from "@/components/applications-grid";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications et cas d'usage — Cryolabs" },
      {
        name: "description",
        content:
          "Restauration automobile, patrimoine, maintenance industrielle, dégraissage d'outillages et agroalimentaire : les usages du nettoyage cryogénique.",
      },
      { property: "og:title", content: "Applications du nettoyage cryogénique — Cryolabs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Du bloc moteur de collection à la ligne de production : où la cryogénie fait la différence.",
      },
    ],
  }),
  component: ApplicationsPage,
});

function ApplicationsPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-glacier">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Applications"
            title="Cas d'usage du nettoyage cryogénique"
            intro="Parce qu'elle ne touche pas au support, la cryogénie intervient là où le sablage et les solvants sont exclus."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <ApplicationsGrid />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Sur le terrain"
            title="Ce que les membres traitent le plus souvent"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Blocs moteurs et carters encrassés",
              "Châssis de motos anciennes",
              "Boiseries et pierres noircies par la suie",
              "Moules d'injection plastique",
              "Convoyeurs agroalimentaires",
              "Armoires électriques empoussiérées",
              "Jantes et pièces en aluminium",
              "Traces de colle et d'adhésifs industriels",
              "Graffitis sur façades patrimoniales",
            ].map((i) => (
              <li
                key={i}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-border bg-gradient-glacier p-8 sm:p-12">
          <SectionHeading
            title="Un projet particulier à traiter ?"
            intro="Décrivez-nous la pièce ou la surface : nous vous dirons si la cryogénie est la bonne réponse — et sinon, laquelle l'est."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Nous décrire le projet <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
