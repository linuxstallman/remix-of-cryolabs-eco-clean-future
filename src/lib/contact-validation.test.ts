import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-validation";

const valid = {
  nom: " Camille Dupont ",
  email: " CAMILLE@example.org ",
  telephone: "+33 6 12 34 56 78",
  statut: "Particulier",
  objet: "Adhésion à l'association",
  message: "Bonjour, je souhaite adhérer.",
  website: "",
  startedAt: Date.now() - 3000,
};

describe("Contact validation", () => {
  it("normalise les espaces et l'adresse email", () => {
    const result = contactSchema.parse(valid);
    expect(result.nom).toBe("Camille Dupont");
    expect(result.email).toBe("camille@example.org");
  });

  it.each([
    { nom: " " },
    { email: "invalide" },
    { telephone: "<script>" },
    { message: "x".repeat(2001) },
    { statut: "Admin" },
    { objet: "Inconnu" },
    { website: "https://spam.example" },
    { startedAt: -1 },
  ])("refuse les données invalides %j", (invalid) => {
    expect(contactSchema.safeParse({ ...valid, ...invalid }).success).toBe(false);
  });
});
