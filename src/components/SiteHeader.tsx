import { Link } from "@tanstack/react-router";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book" },
  { to: "/services", label: "Services" },
  { to: "/security", label: "Security" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
            <Car className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">KGC</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn-grey-glow grid h-10 w-10 place-items-center rounded-full transition-transform active:scale-95"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Burger dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-muted/40" }}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-muted/40 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
            <Car className="h-5 w-5" />
          </div>
          <span className="font-display font-bold">KGC</span>
        </Link>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KGC — Shuttles, Security & Suppliers
        </p>
      </div>
    </footer>
  );
}

