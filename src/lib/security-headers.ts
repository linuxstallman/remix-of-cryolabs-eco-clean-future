import { createMiddleware } from "@tanstack/react-start";

// Ajoute les headers de sécurité HTTP à chaque réponse serveur.
// À enregistrer dans src/start.ts dans requestMiddleware.
export const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const response = await next();

  // Empêche le sniffing de type MIME (clickjacking / XSS via MIME confusion)
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Empêche l'affichage du site dans une iframe (clickjacking)
  response.headers.set("X-Frame-Options", "DENY");

  // Contrôle ce que le navigateur envoie comme Referer
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Désactive les API navigateur non utilisées (caméra, micro, géoloc)
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()",
  );

  // Ne révèle pas le serveur
  response.headers.delete("X-Powered-By");

  return response;
});
