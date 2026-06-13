import { Link } from "@tanstack/react-router";
import { Car } from "lucide-react";
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
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
            <Car className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">KGC</span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
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
