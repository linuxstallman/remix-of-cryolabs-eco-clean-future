import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("expose la navigation principale", () => {
    render(<SiteHeader />);
    expect(screen.getAllByRole("link", { name: "La méthode" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Adhérer" }).length).toBeGreaterThan(0);
  });

  it("ouvre et ferme le menu mobile au clic sur le burger", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const burger = screen.getByRole("button", { name: "Ouvrir le menu" });
    await user.click(burger);
    expect(screen.getByRole("button", { name: "Fermer le menu" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Fermer le menu" }));
    expect(screen.getByRole("button", { name: "Ouvrir le menu" })).toBeInTheDocument();
  });
});
