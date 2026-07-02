import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

// Raw digits only (no +, no spaces) — required for wa.me links
const WHATSAPP_NUMBER = "27731794085";
// Used for tel: links — + is fine here, spaces are not
const PHONE_TEL = "+27731794085";
// Pretty version for display
const PHONE_DISPLAY = "+27 73 179 4085";
const CONTACT_EMAIL = "hello@kgc.co.za";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi KGC, I'd like to make a booking."
)}`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KGC" },
      { name: "description", content: "Learn more about KGC and our commitment to excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
        <h1 className="font-display text-3xl font-bold md:text-5xl">
          Talk to <span className="text-gradient">us</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Bookings, quotes, security or supplier requests — we're a message away.
        </p>

        <div className="mt-6 grid gap-3">
          <Row icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={PHONE_DISPLAY} href={WHATSAPP_URL} external />
          <Row icon={<Phone className="h-4 w-4" />} label="Call" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
          <Row icon={<Mail className="h-4 w-4" />} label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
          <Row icon={<MapPin className="h-4 w-4" />} label="Service area" value="City & airport runs" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/40"
          >
            <Phone className="h-4 w-4" /> Call us
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/40"
          >
            <Mail className="h-4 w-4" /> Email us
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-colors hover:bg-accent/40">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <a href={href}>{inner}</a>
  );
}