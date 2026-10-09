import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

const submitMock = vi.fn(async (_args: unknown) => ({ ok: true as const }));
vi.mock("@tanstack/react-start", () => ({ useServerFn: () => submitMock }));
vi.mock("@/lib/contact.functions", () => ({
  statuts: ["Particulier", "Artisan", "Professionnel"],
  objets: ["Adhésion à l'association", "Autre demande"],
  submitContact: {},
}));
import { MembershipForm } from "./membership-form";

describe("MembershipForm", () => {
  it("affiche les champs attendus", () => {
    render(<MembershipForm />);
    expect(screen.getByLabelText(/nom complet/i)).toBeRequired();
    expect(screen.getByLabelText(/^email$/i)).toHaveAttribute("type", "email");
    expect(screen.getByRole("textbox", { name: /message/i })).toBeInTheDocument();
  });

  it("affiche la confirmation après envoi et permet de revenir au formulaire", async () => {
    const user = userEvent.setup();
    render(<MembershipForm />);

    await user.type(screen.getByLabelText(/nom complet/i), "Camille Dupont");
    await user.type(screen.getByLabelText(/^email$/i), "camille@example.org");
    await user.type(
      screen.getByRole("textbox", { name: /message/i }),
      "Bonjour, je souhaite adhérer.",
    );
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByText(/votre message a bien été envoyé/i)).toBeInTheDocument();
    expect(submitMock).toHaveBeenCalledOnce();
    expect(screen.getByRole("link", { name: /0781551817@proton\.me/ })).toHaveAttribute(
      "href",
      "mailto:0781551817@proton.me",
    );

    await user.click(screen.getByRole("button", { name: /envoyer une autre demande/i }));
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
  });
});

describe("MembershipForm erreurs", () => {
  it("affiche le message d'erreur renvoyé par le serveur", async () => {
    submitMock.mockResolvedValueOnce({ ok: false, error: "Trop d'envois récents." } as never);
    const user = userEvent.setup();
    render(<MembershipForm />);
    await user.type(screen.getByLabelText(/nom complet/i), "Camille Dupont");
    await user.type(screen.getByLabelText(/^email$/i), "camille@example.org");
    await user.type(screen.getByRole("textbox", { name: /message/i }), "Bonjour, une question.");
    await user.click(screen.getByRole("button", { name: /envoyer/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent(/trop d'envois/i);
  });
});
