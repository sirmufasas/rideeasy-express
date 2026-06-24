import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import founderAsset from "@/assets/founder.jpeg";

// Raw digits only (no +, no spaces) — required for wa.me links
const WHATSAPP_NUMBER = "27731794085";
// Used for tel: links — + is fine here, spaces are not
const PHONE_TEL = "+27731794085";
// Pretty version for display
const PHONE_DISPLAY = "+27 73 179 4085";
const CONTACT_EMAIL = "khombashuttles@gmail.com";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi KGC, I'd like to make a booking."
)}`;

// Opens Gmail's web compose window directly, pre-filled, in a new tab
const GMAIL_SUBJECT = "Booking enquiry — KGC";
const GMAIL_BODY = "Hi KGC team,\n\nI'd like to enquire about a booking.\n\n";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL
)}&su=${encodeURIComponent(GMAIL_SUBJECT)}&body=${encodeURIComponent(GMAIL_BODY)}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KGC" },
      { name: "description", content: "Reach KGC for bookings, quotes, security or supplier requests." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm animate-fade-in-up">
          <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border bg-card shadow-elegant hover-lift">
            <img src={founderAsset} alt="Mr Benjamin Khomba — Founder of Khomba Group Courier" loading="lazy" className="aspect-square w-full object-cover" />
            <div className="p-5">
              <p className="font-display text-lg font-semibold">Mr Benjamin Khomba</p>
              <p className="text-sm text-muted-foreground">Founder & Managing Director</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold md:text-5xl">
            Talk to <span className="text-gradient">us</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Bookings, quotes, security or supplier requests — we're a message away.
          </p>

          <div className="mt-6 grid gap-3">
            <Row icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={PHONE_DISPLAY} href={WHATSAPP_URL} external />
            <Row icon={<Phone className="h-4 w-4" />} label="Call" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
            <Row icon={<Mail className="h-4 w-4" />} label="Email" value={CONTACT_EMAIL} href={GMAIL_URL} external />
            <Row icon={<MapPin className="h-4 w-4" />} label="Service area" value="City & airport runs" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/40"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
          </div>
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