import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Truck, Users } from "lucide-react";

// Raw digits only (no +, no spaces) — required for wa.me links
const WHATSAPP_NUMBER = "27731794085";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi KGC, I'd like to know more about your services."
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
      <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
        <h1 className="font-display text-3xl font-bold md:text-5xl">
          About <span className="text-gradient">KGC SHUTTLES</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          KGC was built on a simple idea: getting a ride, hiring security, or working with a
          supplier shouldn't be complicated. No apps to download, no accounts to create —
          just a message on WhatsApp and it's sorted.
        </p>
        <p className="mt-4 text-muted-foreground">
          From our shuttle to vetted security personnel and trusted
          supplier partners, we focus on being reliable, easy to reach, and easy to work with.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        <ServiceCard
          icon={<Truck className="h-5 w-5" />}
          title="Shuttles"
          description="Book a ride for city and airport runs, quick and comfortable."
        />
        <ServiceCard
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Security"
          description="Trusted, vetted security personnel available when and where you need them."
        />
        <ServiceCard
          icon={<Users className="h-5 w-5" />}
          title="Suppliers"
          description="A network of reliable suppliers we work with directly, so you don't have to chase anyone."
        />
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" /> Chat to us on WhatsApp
        </a>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-elegant hover-lift">
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}