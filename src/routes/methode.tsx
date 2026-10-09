import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section";
import { MethodSteps } from "@/components/method-steps";
import { Pillars } from "@/components/pillars";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "La méthode cryogénique expliquée — Cryolabs" },
      {
        name: "description",
        content:
          "Sublimation du CO₂ solide à -78,5 °C, choc thermique et effet cinétique : comprendre pas à pas le nettoyage cryogénique sans eau ni abrasif.",
      },
      { property: "og:title", content: "La méthode cryogénique expliquée — Cryolabs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Choc thermique, sublimation et disparition de la glace : le procédé décrypté par l'association Cryolabs.",
      },
    ],
  }),
  component: MethodePage,
});

function MethodePage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-glacier">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Pédagogie"
            title="Comment fonctionne le nettoyage cryogénique ?"
            intro="Le procédé repose sur une propriété physique simple : la neige carbonique ne fond pas, elle se sublime. Aucun liquide, aucun résidu de média."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <MethodSteps />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading eyebrow="À retenir" title="Les quatre piliers du procédé" />
          <div className="mt-10">
            <Pillars />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Questions fréquentes" title="Ce qu'on nous demande le plus" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Le froid abîme-t-il la pièce ?",
              a: "Le refroidissement est très localisé et bref. Les supports courants (acier, aluminium, bois, pierre) ne subissent pas de contrainte structurelle.",
            },
            {
              q: "Le CO₂ utilisé aggrave-t-il l'effet de serre ?",
              a: "Non : il s'agit de CO₂ déjà capté sur des procédés industriels existants, réutilisé une seconde fois avant sa libération.",
            },
            {
              q: "Peut-on tout nettoyer ?",
              a: "La cryogénie excelle sur les graisses, suies, peintures fragilisées, colles et résidus. Une corrosion profonde relèvera d'un autre procédé.",
            },
            {
              q: "Faut-il un équipement de protection ?",
              a: "Oui : protection auditive, gants, lunettes et une ventilation adaptée, le CO₂ gazeux étant plus lourd que l'air.",
            },
          ].map((f) => (
            <article key={f.q} className="card-frost p-6">
              <h3 className="font-display text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </article>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-frost px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-frost transition-transform hover:-translate-y-0.5"
        >
          Demander une démonstration <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
