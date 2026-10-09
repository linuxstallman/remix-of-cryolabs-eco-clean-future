import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Snowflake, Leaf, Users } from "lucide-react";

import heroImg from "@/assets/hero-cryo.jpg";
import { SectionHeading } from "@/components/section";
import { MethodSteps } from "@/components/method-steps";
import { Pillars } from "@/components/pillars";
import { ApplicationsGrid } from "@/components/applications-grid";
import { ComparisonTable } from "@/components/comparison";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cryolabs — Nettoyage cryogénique écologique pour tous" },
      {
        name: "description",
        content:
          "Association Loi 1901 qui démocratise le nettoyage cryogénique : sublimation du CO₂ à -78,5 °C, sans eau, sans chimie et sans déchet secondaire.",
      },
      { property: "og:title", content: "Cryolabs — Cryogénie pour tous" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Démocratisons ensemble les technologies écologiques de demain : ateliers partagés, vulgarisation et accompagnement technique.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-glacier">
        <div
          aria-hidden
          className="animate-sublimate pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="animate-frost-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Snowflake className="size-3.5" />
              Association Loi 1901
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              La technologie au service de l'écologie.
              <span className="block text-primary">Cryogénie pour tous.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Démocratisons ensemble les technologies écologiques de demain. Cryolabs fait
              découvrir, comprendre et pratiquer le nettoyage cryogénique : sans eau, sans chimie,
              sans déchet secondaire.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-frost px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-frost transition-transform hover:-translate-y-0.5"
              >
                Adhérer à l'association <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/methode"
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Découvrir la méthode
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center rounded-full px-6 py-3.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Demander une démo
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "-78,5 °C", v: "Température du CO₂ solide" },
                { k: "0 L", v: "Eau consommée" },
                { k: "0 kg", v: "Déchet secondaire" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl font-semibold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-frost">
              <img
                src={heroImg}
                alt="Buse de nettoyage cryogénique projetant du CO₂ solide sur une culasse moteur"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-frost backdrop-blur sm:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Sublimation directe
              </p>
              <p className="font-display text-base font-semibold">
                Solide → gaz, sans passer par l'eau
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Pédagogie"
          title="Comment fonctionne le nettoyage cryogénique ?"
          intro="Quatre étapes, une seule matière consommée : du CO₂ recyclé. Cliquez sur chaque étape pour comprendre le procédé."
        />
        <div className="mt-10">
          <MethodSteps />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Piliers" title="Pourquoi cette technologie change la donne" />
          <div className="mt-10">
            <Pillars />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Applications"
          title="Des cas d'usage du garage au monument historique"
          intro="La cryogénie s'adapte aux supports les plus délicats comme aux environnements industriels les plus exigeants."
        />
        <div className="mt-10">
          <ApplicationsGrid />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Comparateur"
            title="Cryogénie, haute pression, sablage ou solvants ?"
            intro="Sélectionnez une méthode pour la mettre en évidence et comparer ses effets réels."
          />
          <div className="mt-10">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-gradient-glacier p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Association"
                title="Un collectif, pas un prestataire"
                intro="Cryolabs mutualise le matériel, les savoir-faire et le temps de ses membres pour rendre la cryogénie accessible aux particuliers, artisans et professionnels."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/association"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  L'espace adhérents <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Nous écrire
                </Link>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                {
                  icon: Users,
                  t: "Ateliers partagés",
                  d: "Accès encadré au matériel et aux bonnes pratiques.",
                },
                {
                  icon: Leaf,
                  t: "Vulgarisation",
                  d: "Démonstrations publiques et contenus pédagogiques.",
                },
                {
                  icon: Snowflake,
                  t: "Accompagnement",
                  d: "Conseils techniques pour vos premiers chantiers.",
                },
              ].map((i) => {
                const Icon = i.icon;
                return (
                  <li key={i.t} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-frost text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-display font-semibold">{i.t}</span>
                      <span className="block text-sm text-muted-foreground">{i.d}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
