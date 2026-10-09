import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pillars } from "./pillars";
import { ApplicationsGrid, applications } from "./applications-grid";

describe("Pillars", () => {
  it("affiche les quatre piliers de l'association", () => {
    render(<Pillars />);
    for (const title of [
      "Écologique",
      "Non abrasif",
      "Zéro déchet secondaire",
      "Rapidité & sécurité",
    ]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });
});

describe("ApplicationsGrid", () => {
  it("affiche toutes les applications métier", () => {
    render(<ApplicationsGrid />);
    expect(screen.getAllByRole("heading")).toHaveLength(applications.length);
    expect(screen.getByRole("heading", { name: /agroalimentaire/i })).toBeInTheDocument();
  });
});
