import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Car,
  Clock,
  ShieldCheck,
  Star,
  Phone,
  MapPin,
  PackageCheck,
  Mail,
  MessageCircle,
  Eye,
  Lock,
  Users,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { BookingForm } from "@/components/BookingForm";
import { CarLoader } from "@/components/CarLoader";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/haval-jolion.png";
import driverImg from "@/assets/driver.jpg";
import securityImg from "@/assets/security.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGC — Shuttles, Security & Suppliers" },
      {
        name: "description",
        content:
          "Book a private shuttle in a white Haval Jolion, hire trusted security, or work with our supplier network — all via WhatsApp.",
      },
      { property: "og:title", content: "KGC — Shuttles, Security & Suppliers" },
      { property: "og:description", content: "Book your shuttle in seconds via WhatsApp." },
    ],
  }),
  component: Home,
});

// EDIT ME — driver / contact WhatsApp number (international, no + or spaces)
const CONTACT_WHATSAPP = "27000000000";
const CONTACT_EMAIL = "hello@kgc.co.za";

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
            <span className="font-display text-lg font-bold tracking-tight">KGC</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#book" className="transition-colors hover:text-foreground">Book</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#security" className="transition-colors hover:text-foreground">Security</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
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
              <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-primary" />
              Drivers online now
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Your ride, <span className="text-gradient">on your terms.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Premium shuttle service in a spotless white Haval Jolion. Pick where, when
              and how — we'll deliver it through a single WhatsApp message.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="#book"
                className="btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform"
              >
                Book a ride
              </a>
              <a
                href="#services"
                className="btn-grey-glow inline-flex items-center gap-2 bg-card px-6 py-3 text-sm font-semibold text-foreground"
              >
                Our services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Stat icon={<Star className="h-4 w-4" />} label="4.9 rating" />
              <Stat icon={<Clock className="h-4 w-4" />} label="On-time pickup" />
              <Stat icon={<ShieldCheck className="h-4 w-4" />} label="Vetted driver" />
            </div>
          </div>

          <div className="relative animate-fade-in-up">
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
      <section id="book" className="mx-auto max-w-3xl px-4 pb-20 animate-fade-in-up">
        <BookingForm />
      </section>

      {/* Services */}
      <section id="services" className="border-y bg-secondary/35 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Services offered</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            One team. Three trusted services — transport, protection and supply.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Service
              icon={<Car className="h-5 w-5" />}
              title="Shuttlers"
              desc="Scheduled and on-demand rides in our white Haval Jolion."
            />
            <Service
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Security"
              desc="Reliable security for private, event and business needs."
            />
            <Service
              icon={<PackageCheck className="h-5 w-5" />}
              title="Suppliers"
              desc="Supplier coordination for products and deliveries."
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            <img
              src={securityImg}
              alt="KGC security officer"
              loading="lazy"
              width={1024}
              height={1024}
              className="hover-lift w-full rounded-3xl border object-cover shadow-elegant"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> KGC Security
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Protection you can <span className="text-gradient">trust.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether it's a private event, a venue, or close protection — our trained
              officers show up sharp, alert, and professional.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <SecLine icon={<Eye className="h-4 w-4" />} text="Event & venue security" />
              <SecLine icon={<Users className="h-4 w-4" />} text="Close personal protection" />
              <SecLine icon={<Lock className="h-4 w-4" />} text="Static guarding & patrols" />
              <SecLine icon={<ShieldCheck className="h-4 w-4" />} text="PSIRA registered officers" />
            </ul>
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent("Hi KGC, I'd like to book security services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grey-glow mt-7 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-semibold text-background"
            >
              <MessageCircle className="h-4 w-4" /> Request security
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y bg-secondary/35 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">About KGC</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            KGC was built on a simple idea: one trusted name for the three things people
            ask for most — a safe ride, dependable security, and reliable suppliers. We
            keep things personal: you message us, a real human answers, and the job gets
            done right.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Step n="1" title="Tell us your trip" desc="Pickup, destination, date and ride type." />
            <Step n="2" title="Send via WhatsApp" desc="One tap opens a chat with the driver." />
            <Step n="3" title="Hop in" desc="Your driver confirms and arrives in the white Jolion." />
          </div>
        </div>
      </section>

      {/* Contact / Driver */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-sm animate-fade-in-up">
            <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-elegant hover-lift">
              <img
                src={driverImg}
                alt="Your KGC driver"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <p className="font-display text-lg font-semibold">Your driver</p>
                <p className="text-sm text-muted-foreground">
                  Friendly · Punctual · 4.9★ rated
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Talk to <span className="text-gradient">us</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Bookings, quotes, security or supplier requests — we're a message away.
            </p>
            <div className="mt-6 grid gap-3">
              <ContactRow
                icon={<MessageCircle className="h-4 w-4" />}
                label="WhatsApp"
                value={`+${CONTACT_WHATSAPP}`}
                href={`https://wa.me/${CONTACT_WHATSAPP}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Call"
                value={`+${CONTACT_WHATSAPP}`}
                href={`tel:+${CONTACT_WHATSAPP}`}
              />
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Service area"
                value="City & airport runs"
              />
            </div>
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grey-glow mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              <Car className="h-5 w-5" />
            </div>
            <span className="font-display font-bold">KGC</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} KGC — Shuttles, Security & Suppliers</p>
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
    <div className="hover-lift rounded-2xl border bg-card p-6 text-left shadow-sm">
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
    <div className="hover-lift rounded-2xl border bg-card p-6 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}

function SecLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-sm font-medium">{text}</span>
    </li>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-colors hover:bg-accent/40">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
