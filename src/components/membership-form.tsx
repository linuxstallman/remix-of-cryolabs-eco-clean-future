import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { contactSchema, objets, statuts } from "@/lib/contact-validation";

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/30";

export function MembershipForm() {
  const [sent, setSent] = useState(false);
  const [statut, setStatut] = useState<string>("Particulier");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(Date.now());
  const submit = useServerFn(submitContact);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "");
    const parsed = contactSchema.safeParse({
      nom: get("nom"),
      email: get("email"),
      telephone: get("telephone"),
      statut: get("statut"),
      objet: get("objet"),
      message: get("message"),
      website: get("website"),
      startedAt: startedAt.current,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Formulaire invalide.");
      return;
    }
    setPending(true);
    setError(null);
    try {
      const res = await submit({ data: parsed.data });
      if (res.ok) setSent(true);
      else setError(res.error);
    } catch {
      setError("Envoi impossible pour le moment. Réessayez plus tard.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="animate-frost-rise rounded-3xl border border-eco/40 bg-eco/8 p-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-eco text-eco-foreground">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Merci, votre message a bien été envoyé
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Nous revenons vers vous sous quelques jours. Pour toute question urgente, écrivez
          directement à{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:0781551817@proton.me"
          >
            0781551817@proton.me
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now();
            setSent(false);
          }}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-border bg-card p-6 shadow-frost sm:p-8"
    >
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-medium">
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            required
            minLength={2}
            maxLength={100}
            placeholder="Camille Dupont"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Votre adresse email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="tel" className="mb-2 block text-sm font-medium">
            Téléphone
          </label>
          <input
            id="tel"
            name="telephone"
            type="tel"
            maxLength={20}
            placeholder="06 12 34 56 78"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="objet" className="mb-2 block text-sm font-medium">
            Objet
          </label>
          <select id="objet" name="objet" className={fieldClass} defaultValue={objets[0]}>
            {objets.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-medium">Statut</legend>
        <div className="flex flex-wrap gap-2">
          {statuts.map((s) => (
            <label
              key={s}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
                statut === s
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <input
                type="radio"
                name="statut"
                value={s}
                checked={statut === s}
                onChange={() => setStatut(s)}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          placeholder="Décrivez votre projet, la pièce ou la surface à traiter…"
          className={fieldClass}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm"
        >
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-7 w-full rounded-full bg-gradient-frost px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Les informations transmises servent uniquement au traitement de votre demande d'adhésion ou
        de contact.
      </p>
    </form>
  );
}
