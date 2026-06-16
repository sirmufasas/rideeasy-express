import { createFileRoute } from "@tanstack/react-router";
import founderAsset from "@/assets/founder.jpeg.asset.json";

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
    <section className="mx-auto max-w-4xl px-4 py-16 animate-fade-in-up">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold md:text-5xl">About Khomba Group Courier</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Khomba Group Courier was built on a simple idea: one trusted name for the three things people ask for most — a safe ride,
          dependable security, and reliable suppliers. We keep things personal: you message us, a real human answers,
          and the job gets done right.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <figure className="max-w-sm">
          <img
            src={founderAsset.url}
            alt="Founder of Khomba Group Courier"
            className="rounded-2xl border shadow-md"
          />
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">Our founder</figcaption>
        </figure>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Step n="1" title="Tell us your trip" desc="Pickup, destination, date and ride type." />
        <Step n="2" title="Send via WhatsApp" desc="One tap opens a chat with the driver." />
        <Step n="3" title="Hop in" desc="Your driver confirms and arrives in the white Jolion." />
      </div>
    </section>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="hover-lift rounded-2xl border bg-card p-6 text-left shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">{n}</div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
