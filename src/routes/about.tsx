import { createFileRoute } from "@tanstack/react-router";
import founderAsset from "@/assets/founder.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khomba Group Courier" },
      { name: "description", content: "One trusted name for shuttles, security and suppliers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="animate-fade-in-up">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">

          {/* Photo — matches contact page card style */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-elegant hover-lift">
              <img
                src={founderAsset}
                alt="Mr Benjamin Khomba — Founder of Khomba Group Courier"
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="font-display text-lg font-semibold">Mr Benjamin Khomba</p>
                <p className="text-sm text-muted-foreground">Founder & Managing Director</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Est. in Johannesburg
            </p>
            <h1 className="font-display text-3xl font-bold md:text-5xl">
              About <span className="text-gradient">Khomba Group</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Khomba Group Courier was built on simplicity — a safe ride,
              dependable security, and reliable suppliers, all under one name.
            </p>

            {/* Service pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Shuttles", "Security", "Suppliers"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="border-t bg-card/50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Step n="1" title="Tell us your trip" desc="Pickup, destination, date and ride type." />
            <Step n="2" title="Message on WhatsApp" desc="One tap opens a chat with the driver." />
            <Step n="3" title="Hop in" desc="Your driver confirms and arrives in the white Jolion." />
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="border-t px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <Value label="Personal" desc="Every booking handled with care." />
          <Value label="Reliable" desc="The job gets done right, every time." />
          <Value label="Trusted" desc="One name, three services." />
        </div>
      </section>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="hover-lift rounded-2xl border bg-card p-6 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
        {n}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Value({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <p className="font-display text-xl font-bold text-primary">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}