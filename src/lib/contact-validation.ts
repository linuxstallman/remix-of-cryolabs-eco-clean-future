import { z } from "zod";

export const statuts = ["Particulier", "Artisan", "Professionnel"] as const;
export const objets = [
  "Adhésion à l'association",
  "Demande de démonstration",
  "Conseil technique",
  "Participation à un atelier",
  "Autre demande",
] as const;

export const contactSchema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(100, "Nom trop long"),
  email: z.string().trim().toLowerCase().email("Email invalide").max(255),
  telephone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[+0-9 ().-]*$/, "Téléphone invalide")
    .optional()
    .default(""),
  statut: z.enum(statuts),
  objet: z.enum(objets),
  message: z.string().trim().min(10, "Message trop court").max(2000, "Message trop long"),
  website: z.string().max(0, "Formulaire invalide.").optional().default(""),
  startedAt: z.number().int().positive(),
});
