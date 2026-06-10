import { Link } from "@tanstack/react-router";
import { Car, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book a ride" },
  { to: "/services", label: "Services" },
  { to: "/security", label: "Security" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/policy", label: "Policy" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
            <Car className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">KGC</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          {LINKS.filter((l) => l.to !== "/").map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="btn-grey-glow inline-flex h-10 w-10 items-center justify-center bg-card text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-display text-xl">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-primary/10 text-primary" }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
