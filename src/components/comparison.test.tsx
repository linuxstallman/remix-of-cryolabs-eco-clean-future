import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ComparisonTable } from "./comparison";

describe("ComparisonTable", () => {
  it("liste les quatre méthodes comparées", () => {
    render(<ComparisonTable />);
    for (const label of [
      "Haute pression",
      "Sablage abrasif",
      "Solvants chimiques",
      "Cryogénie CO₂",
    ]) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
      expect(screen.getByRole("columnheader", { name: label })).toBeInTheDocument();
    }
  });

  it("met en avant la colonne sélectionnée", async () => {
    const user = userEvent.setup();
    render(<ComparisonTable />);

    const cryoHeader = screen.getByRole("columnheader", { name: "Cryogénie CO₂" });
    expect(cryoHeader.className).toContain("bg-frost");

    await user.click(screen.getByRole("button", { name: "Haute pression" }));
    expect(screen.getByRole("columnheader", { name: "Haute pression" }).className).toContain(
      "bg-frost",
    );
    expect(screen.getByRole("columnheader", { name: "Cryogénie CO₂" }).className).not.toContain(
      "bg-frost",
    );
  });

  it("affiche les critères clés", () => {
    render(<ComparisonTable />);
    expect(screen.getByRole("rowheader", { name: /consommation d'eau/i })).toBeInTheDocument();
    expect(screen.getByRole("rowheader", { name: /déchet secondaire/i })).toBeInTheDocument();
  });
});
