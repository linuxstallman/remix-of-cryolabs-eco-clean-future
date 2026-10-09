import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

describe("SiteFooter", () => {
  it("affiche l'adresse email officielle en lien mailto", () => {
    render(<SiteFooter />);
    const mail = screen.getByRole("link", { name: /0781551817@proton\.me/ });
    expect(mail).toHaveAttribute("href", "mailto:0781551817@proton.me");
  });

  it("affiche le lien vers le site d'échecs ouvrant un nouvel onglet", () => {
    render(<SiteFooter />);
    const chess = screen.getByRole("link", { name: /site d'échecs/i });
    expect(chess).toHaveAttribute("href", "https://android-chess-hero.lovable.app/");
    expect(chess).toHaveAttribute("target", "_blank");
    expect(chess.getAttribute("rel")).toContain("noopener");
  });
});
