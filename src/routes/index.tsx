import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, ShieldCheck, Star, Phone, MapPin, PackageCheck } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { BookingForm } from "@/components/BookingForm";
import { CarLoader } from "@/components/CarLoader";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/haval-jolion.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shuttler — Premium rides in a white Haval Jolion" },
      {
        name: "description",
        content:
          "Book a private shuttle in seconds. Pick your ride, choose a date and we'll dispatch your driver via WhatsApp.",
      },
      { property: "og:title", content: "Shuttler — Premium rides" },
      { property: "og:description", content: "Book your shuttle in seconds via WhatsApp." },
    ],
  }),
  component: Home,
});

function Home() {
  const [booting, setBooting] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (booting) return <CarLoader label="Starting your engine…" />;

  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
              <Car className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">Shuttler</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#book" className="transition-colors hover:text-foreground">Book</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#fleet" className="transition-colors hover:text-foreground">Fleet</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div className="animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Drivers online now
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Your ride, <span className="text-gradient">on your terms.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Premium shuttle service in a spotless white Haval Jolion. Pick where, when
              and how — we'll deliver it through a single WhatsApp message.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Book a ride
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                How it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Stat icon={<Star className="h-4 w-4" />} label="4.9 rating" />
              <Stat icon={<Clock className="h-4 w-4" />} label="On-time pickup" />
              <Stat icon={<ShieldCheck className="h-4 w-4" />} label="Vetted driver" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
            <img
              src={carImg}
              alt="White Haval Jolion"
              className="animate-bob mx-auto w-full max-w-md drop-shadow-2xl"
            />
            <div className="road-stripes mx-auto mt-2 h-[2px] w-3/4 opacity-50" />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="mx-auto max-w-3xl px-4 pb-20">
        <BookingForm />
      </section>

      {/* Services */}
      <section id="services" className="border-y bg-secondary/35 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Services offered</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            KGC support for transport, protection and supply needs.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Service icon={<ShieldCheck className="h-5 w-5" />} title="Security" desc="Reliable security support for private, event and business needs." />
            <Service icon={<PackageCheck className="h-5 w-5" />} title="Suppliers" desc="Supplier coordination for products, deliveries and operational requests." />
            <Service icon={<Car className="h-5 w-5" />} title="Shuttlers" desc="Scheduled and on-demand rides in the white Haval Jolion." />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Three steps from request to riding.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Step n="1" title="Tell us your trip" desc="Pickup, destination, date and ride type." />
            <Step n="2" title="Send via WhatsApp" desc="One tap opens a chat with your driver, pre-filled." />
            <Step n="3" title="Hop in" desc="Your driver confirms and arrives in the white Jolion." />
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">The Fleet</h2>
            <p className="mt-3 text-muted-foreground">
              Every booking rides in our pristine white Haval Jolion — a refined,
              spacious crossover built for smooth city and intercity travel.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Climate controlled cabin",
                "Phone charging onboard",
                "Bottled water on request",
                "Bluetooth audio",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-elegant">
            <img src={carImg} alt="Haval Jolion" className="w-full" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-semibold">Haval Jolion</p>
                <p className="text-sm text-muted-foreground">White · Premium trim</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="contact" className="border-t bg-secondary/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              <Car className="h-5 w-5" />
            </div>
            <span className="font-display font-bold">Shuttler</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp bookings</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> City & airport</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Shuttler</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
        {n}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Service({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}
