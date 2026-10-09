import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HandHeart, Hammer, Megaphone } from "lucide-react";

import { SectionHeading } from "@/components/section";

const missions = [
  {
    icon: Hammer,
    title: "Ateliers partagés",
    body: "Un matériel coûteux devient accessible quand il est mutualisé. Les adhérents réservent des créneaux encadrés pour traiter leurs propres pièces.",
  },
  {
    icon: BookOpen,
    title: "Vulgarisation",
    body: "Fiches pratiques, démonstrations publiques et rencontres : nous expliquons la physique du procédé sans jargon.",
  },
  {
    icon: HandHeart,
    title: "Accompagnement technique",
    body: "Réglages de pression, choix des pellets, sécurité et ventilation : les membres expérimentés épaulent les nouveaux.",
  },
  {
    icon: Megaphone,
    title: "Sensibilisation écologique",
    body: "Montrer qu'un nettoyage industriel peut se passer d'eau, de solvants et de déchets secondaires.",
  },
];

export const Route = createFileRoute("/association")({
  head: () => ({
    meta: [
      { title: "L'association & l'espace adhérents — Cryolabs" },
      {
        name: "description",
        content:
          "Cryolabs, association Loi 1901 : ateliers partagés, vulgarisation, conseils et accompagnement technique des membres autour de la cryogénie.",
      },
      { property: "og:title", content: "L'association Cryolabs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Un collectif de particuliers, artisans et professionnels qui mutualise matériel et savoir-faire.",
      },
    ],
  }),
  component: AssociationPage,
});

function AssociationPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-glacier">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Association Loi 1901"
            title="Espace adhérents & rôle de l'association"
            intro="Cryolabs n'est pas une entreprise de nettoyage. C'est un collectif à but non lucratif qui rend une technologie propre accessible à celles et ceux qui n'y auraient jamais eu accès."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {missions.map((m) => {
            const Icon = m.icon;
            return (
              <article key={m.title} className="card-frost p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-frost text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Adhésion"
            title="Trois profils, un même collectif"
            intro="L'adhésion ouvre l'accès aux ateliers, aux ressources pédagogiques et à l'entraide entre membres."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Particulier",
                d: "Curieux, restaurateur du dimanche ou passionné de mécanique ancienne.",
                p: ["Accès aux ateliers découverte", "Fiches pratiques", "Entraide entre membres"],
              },
              {
                t: "Artisan",
                d: "Vous voulez tester la cryogénie avant d'investir dans du matériel.",
                p: [
                  "Créneaux d'atelier étendus",
                  "Conseils d'équipement",
                  "Retours d'expérience terrain",
                ],
              },
              {
                t: "Professionnel",
                d: "Structure souhaitant former ses équipes ou soutenir l'association.",
                p: [
                  "Sessions de sensibilisation",
                  "Accompagnement sur site",
                  "Soutien au collectif",
                ],
              },
            ].map((c) => (
              <article key={c.t} className="card-frost flex flex-col p-7">
                <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {c.p.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-eco" />
                      <span className="text-muted-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                >
                  Rejoindre <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-border bg-gradient-glacier p-8 sm:p-12">
          <SectionHeading
            title="Prêt à rejoindre Cryolabs ?"
            intro="Remplissez le formulaire d'adhésion : nous revenons vers vous avec les modalités et les prochains créneaux d'atelier."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-frost px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-frost transition-transform hover:-translate-y-0.5"
          >
            Adhérer à l'association <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
