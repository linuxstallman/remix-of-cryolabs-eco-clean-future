import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section";
import { MembershipForm } from "@/components/membership-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Adhésion & contact — Cryolabs" },
      {
        name: "description",
        content:
          "Adhérez à Cryolabs ou demandez une démonstration de nettoyage cryogénique : particuliers, artisans et professionnels bienvenus.",
      },
      { property: "og:title", content: "Adhésion & contact — Cryolabs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Un formulaire unique pour adhérer, demander une démo ou obtenir un conseil technique.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-glacier">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Adhésion & contact"
            title="Parlons de votre projet"
            intro="Adhésion, démonstration, conseil technique ou simple curiosité : une seule adresse, une réponse humaine."
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr]">
        <MembershipForm />

        <aside className="space-y-4">
          {[
            {
              icon: Mail,
              t: "Email",
              d: "0781551817@proton.me",
              href: "mailto:0781551817@proton.me",
            },
            { icon: Phone, t: "Téléphone", d: "Sur demande par email" },
            { icon: MapPin, t: "Atelier partagé", d: "Adresse communiquée aux adhérents" },
            { icon: Clock, t: "Délai de réponse", d: "Sous 3 à 5 jours ouvrés" },
          ].map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.t} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-frost text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold">{i.t}</p>
                  {i.href ? (
                    <a
                      href={i.href}
                      className="inline-block min-h-11 py-2.5 text-sm leading-none text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {i.d}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{i.d}</p>
                  )}
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-eco/40 bg-eco/8 p-5">
            <p className="font-display font-semibold">Association Loi 1901</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Cryolabs est une association à but non lucratif. Les adhésions financent le matériel
              mutualisé et les actions de sensibilisation.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
