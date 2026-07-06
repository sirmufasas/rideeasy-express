import { createFileRoute } from "@tanstack/react-router";
import { Car, ShieldCheck, PackageCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KGC" },
      { name: "description", content: "Shuttles, security and supplier coordination — all under one trusted KGC roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 animate-fade-in-up">
      <h1 className="font-display text-3xl font-bold md:text-5xl">Services offered</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">One team. Three trusted services — transport, protection and supply.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Service icon={<Car className="h-5 w-5" />} title="Shuttlers" desc="Scheduled and on-demand rides." />
        <Service icon={<ShieldCheck className="h-5 w-5" />} title="Security" desc="Reliable security for private, event and business needs." />
        <Service icon={<PackageCheck className="h-5 w-5" />} title="Suppliers" desc="Supplier coordination for products and deliveries." />
      </div>
    </section>
  );
}

function Service({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="hover-lift rounded-2xl border bg-card p-6 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}
