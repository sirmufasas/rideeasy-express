import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import driverImg from "@/assets/driver.jpg";

const CONTACT_WHATSAPP = "27000000000";
const CONTACT_EMAIL = "hello@kgc.co.za";

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
            <img src={driverImg} alt="Your KGC driver" loading="lazy" className="aspect-square w-full object-cover" />
            <div className="p-5">
              <p className="font-display text-lg font-semibold">Your driver</p>
              <p className="text-sm text-muted-foreground">Friendly · Punctual · 4.9★ rated</p>
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
            <Row icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={`+${CONTACT_WHATSAPP}`} href={`https://wa.me/${CONTACT_WHATSAPP}`} />
            <Row icon={<Phone className="h-4 w-4" />} label="Call" value={`+${CONTACT_WHATSAPP}`} href={`tel:+${CONTACT_WHATSAPP}`} />
            <Row icon={<Mail className="h-4 w-4" />} label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
            <Row icon={<MapPin className="h-4 w-4" />} label="Service area" value="City & airport runs" />
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
  );
}

function Row({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-colors hover:bg-accent/40">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : inner;
}
