import { createMiddleware } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";

// Ajoute les headers de sécurité HTTP à chaque réponse serveur.
// À enregistrer dans src/start.ts dans requestMiddleware.
export const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  // Empêche le sniffing de type MIME
  setResponseHeader("X-Content-Type-Options", "nosniff");
  // Empêche l'affichage du site dans une iframe (clickjacking)
  setResponseHeader("X-Frame-Options", "DENY");
  // Contrôle ce que le navigateur envoie comme Referer
  setResponseHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  // Désactive les API navigateur non utilisées
  setResponseHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()",
  );
  return next();
});
