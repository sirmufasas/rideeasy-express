import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeProvider";
import logoAsset from "@/assets/kgc-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset} alt="Khomba Group Courier" className="h-10 w-auto" />
          <span className="font-display text-sm font-bold tracking-tight sm:text-base">KHOMBA GROUP COURIER</span>
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
          <a
            href="/safeguard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#5a1a1a] to-[#1f3b66] px-3 py-2 font-semibold text-white shadow-sm transition hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            <span>Security — Safeguard Solutions</span>
            <ExternalLink className="h-4 w-4" />
          </a>
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
          <img src={logoAsset} alt="Khomba Group Courier" className="h-9 w-auto" />
          <span className="font-display font-bold">KHOMBA GROUP COURIER</span>
        </Link>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KGC — Shuttles, Security & Suppliers
        </p>
      </div>
    </footer>
  );
}

