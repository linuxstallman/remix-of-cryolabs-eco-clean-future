import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Snowflake, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/methode", label: "La méthode" },
  { to: "/applications", label: "Applications" },
  { to: "/comparateur", label: "Comparateur" },
  { to: "/association", label: "Association" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-frost text-primary-foreground shadow-frost">
            <Snowflake className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Cryolabs</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Adhérer
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {[...links, { to: "/contact", label: "Adhérer / Contact" } as const].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
