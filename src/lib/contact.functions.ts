import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { contactSchema } from "./contact-validation";

export type ContactResult = { ok: true } | { ok: false; error: string };

const MAX_PER_IP = 3;
const MAX_PER_EMAIL = 3;
const WINDOW_MINUTES = 15;

async function sha256(value: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.safeParse(data))
  .handler(async ({ data: parsed }): Promise<ContactResult> => {
    if (!parsed.success) {
      return { ok: false, error: parsed.error.issues[0]?.message ?? "Formulaire invalide." };
    }
    const data = parsed.data;

    const elapsed = Date.now() - data.startedAt;
    if (elapsed < 2000) {
      return { ok: false, error: "Merci de patienter deux secondes avant de réessayer." };
    }
    if (elapsed > 1000 * 60 * 60 * 24) {
      return { ok: false, error: "Ce formulaire a expiré. Actualisez la page avant de réessayer." };
    }
    const linkCount = (data.message.match(/https?:\/\//gi) ?? []).length;
    if (linkCount > 2) {
      return { ok: false, error: "Votre message contient trop de liens." };
    }

    // Cloudflare overwrites this header. Never trust client-supplied forwarded IPs.
    const ip = getRequestHeader("cf-connecting-ip") ?? "unknown";
    const ipHash = await sha256(`cryolabs:${ip}`);

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

    const [byIp, byEmail] = await Promise.all([
      supabaseAdmin
        .from("contact_submissions")
        .select("id", { count: "exact", head: true })
        .eq("ip_hash", ipHash)
        .gte("created_at", since),
      supabaseAdmin
        .from("contact_submissions")
        .select("id", { count: "exact", head: true })
        .eq("email", data.email)
        .gte("created_at", since),
    ]);
    if (byIp.error || byEmail.error) {
      console.error("Contact rate-limit check failed");
      return { ok: false, error: "Service momentanément indisponible. Réessayez plus tard." };
    }
    if ((byIp.count ?? 0) >= MAX_PER_IP || (byEmail.count ?? 0) >= MAX_PER_EMAIL) {
      return {
        ok: false,
        error: `Trop d'envois récents. Merci de réessayer dans ${WINDOW_MINUTES} minutes.`,
      };
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || null,
      statut: data.statut,
      objet: data.objet,
      message: data.message,
      ip_hash: ipHash,
    });
    if (error) {
      if (error.code === "P0001") {
        return {
          ok: false,
          error: `Trop d'envois récents. Merci de réessayer dans ${WINDOW_MINUTES} minutes.`,
        };
      }
      console.error("Contact insert failed");
      return { ok: false, error: "Envoi impossible pour le moment. Réessayez plus tard." };
    }
    return { ok: true };
  });
