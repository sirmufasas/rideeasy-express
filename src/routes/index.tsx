import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Clock, ShieldCheck, Star } from "lucide-react";
import { CarLoader } from "@/components/CarLoader";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/haval-jolion.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGC — Shuttles, Security & Suppliers" },
      { name: "description", content: "Premium shuttle service. Book via WhatsApp." },
    ],
  }),
  component: Home,
});

function Home() {
  const [booting, setBooting] = useState(true);
  useEffect(() => {
    if (!booting) return;
    const t = setTimeout(() => setBooting(false), 6000);
    return () => clearTimeout(t);
  }, [booting]);

  if (booting) return <CarLoader label="Starting your engine…" />;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-primary" />
            Drivers online now
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Your ride, <span className="text-gradient">on your terms.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            Premium shuttle service. Pick where, when
            and how — we'll deliver it through a single WhatsApp message.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <Link to="/book" className="btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Book a ride
            </Link>
            <Link to="/services" className="btn-grey-glow inline-flex items-center gap-2 bg-card px-6 py-3 text-sm font-semibold text-foreground">
              Our services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Stat icon={<Star className="h-4 w-4" />} label="4.9 rating" />
            <Stat icon={<Clock className="h-4 w-4" />} label="On-time pickup" />
            <Stat icon={<ShieldCheck className="h-4 w-4" />} label="Vetted driver" />
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
          <img src={carImg} alt="White Haval Jolion" className="animate-bob mx-auto w-full max-w-md drop-shadow-2xl" />
          <div className="road-stripes mx-auto mt-2 h-[2px] w-3/4 opacity-50" />
        </div>
      </div>
    </section>
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

// kept for icon import side-effect tree-shaking note
void Car;
