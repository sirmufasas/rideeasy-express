import { createFileRoute } from "@tanstack/react-router";
import { Eye, Users, Lock, ShieldCheck, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import securityImg from "@/assets/security.jpg";

const CONTACT_WHATSAPP = "27000000000";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security Services — KGC" },
      { name: "description", content: "PSIRA-registered officers for event security, close protection, and static guarding." },
      { property: "og:title", content: "Security Services — KGC" },
      { property: "og:description", content: "Professional, vetted security officers — request via WhatsApp." },
      { property: "og:image", content: securityImg },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            <img
              src={securityImg}
              alt="KGC security officer"
              loading="lazy"
              className="hover-lift w-full rounded-3xl border object-cover shadow-elegant"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> KGC Security
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Protection you can <span className="text-gradient">trust.</span>
            </h1>
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
      <SiteFooter />
    </div>
  );
}

function SecLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </li>
  );
}
