import { Link } from "@tanstack/react-router";
import { Crown, Mail, MapPin, Snowflake } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-frost text-primary-foreground">
              <Snowflake className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">Cryolabs</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Association Loi 1901 dédiée à la démocratisation et à la sensibilisation au nettoyage
            cryogénique écologique. La technologie au service de l'écologie.
          </p>
          <a
            href="https://android-chess-hero.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/15"
          >
            <Crown className="size-4 text-accent" />
            <span>
              Notre site d'échecs <span aria-hidden="true">↗</span>
              <span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
            </span>
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/methode" className="hover:text-foreground">
                La méthode
              </Link>
            </li>
            <li>
              <Link to="/applications" className="hover:text-foreground">
                Applications
              </Link>
            </li>
            <li>
              <Link to="/comparateur" className="hover:text-foreground">
                Comparateur
              </Link>
            </li>
            <li>
              <Link to="/association" className="hover:text-foreground">
                Association
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Adhésion &amp; contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-accent" />
              <a
                href="mailto:0781551817@proton.me"
                className="min-h-11 py-2.5 leading-none hover:text-foreground hover:underline"
              >
                0781551817@proton.me
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-accent" />
              <span>Atelier partagé — France</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cryolabs — Association régie par la loi du 1er juillet 1901.
          Association à but non lucratif.
        </p>
      </div>
    </footer>
  );
}
