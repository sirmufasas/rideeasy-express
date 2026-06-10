import { Link } from "@tanstack/react-router";
import { Car } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
            <Car className="h-5 w-5" />
          </div>
          <span className="font-display font-bold">KGC</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
          <Link to="/policy" className="hover:text-foreground">Policy & Terms</Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KGC — Shuttles, Security & Suppliers
        </p>
      </div>
    </footer>
  );
}
