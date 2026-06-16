import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShieldCheck, Camera, Zap, DoorOpen, Users, Radio, MapPin, Phone, Mail, MessageCircle, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import logo from "@/assets/safeguard-logo.jpeg.asset.json";

const WHATSAPP = "27000000000";

export const Route = createFileRoute("/safeguard")({
  head: () => ({
    meta: [
      { title: "Safeguard Security Solutions — Johannesburg" },
      { name: "description", content: "Electric fencing, CCTV, gate motors, guarding and complex security across Johannesburg. Browse and order our product catalogue." },
    ],
  }),
  component: SafeguardPage,
});

type Product = {
  id: string;
  name: string;
  category: "Fencing" | "CCTV" | "Access" | "Alarm" | "Guarding";
  price: number;
  unit: string;
  desc: string;
  icon: React.ReactNode;
};

const PRODUCTS: Product[] = [
  { id: "ef-energizer", name: "Electric Fence Energizer", category: "Fencing", price: 2850, unit: "unit", desc: "8-joule mains energizer with LCD display and remote.", icon: <Zap className="h-5 w-5" /> },
  { id: "ef-wire", name: "Galvanised Fence Wire (per 50m)", category: "Fencing", price: 480, unit: "roll", desc: "High-tensile 1.6mm wire for perimeter strands.", icon: <Zap className="h-5 w-5" /> },
  { id: "cctv-4ch", name: "CCTV Kit — 4 Channel HD", category: "CCTV", price: 6499, unit: "kit", desc: "4× 2MP cameras, DVR, 1TB storage, remote viewing.", icon: <Camera className="h-5 w-5" /> },
  { id: "cctv-8ch", name: "CCTV Kit — 8 Channel 4MP", category: "CCTV", price: 11990, unit: "kit", desc: "8× 4MP IP cameras, NVR, 2TB, mobile alerts.", icon: <Camera className="h-5 w-5" /> },
  { id: "gate-motor", name: "Sliding Gate Motor", category: "Access", price: 5450, unit: "unit", desc: "500kg load, battery backup, 2 remotes included.", icon: <DoorOpen className="h-5 w-5" /> },
  { id: "intercom", name: "Wireless Intercom System", category: "Access", price: 3200, unit: "set", desc: "Audio-video intercom with door release.", icon: <Radio className="h-5 w-5" /> },
  { id: "alarm-kit", name: "Wireless Alarm Kit", category: "Alarm", price: 4250, unit: "kit", desc: "Control panel, 4 PIRs, siren, keypad, app control.", icon: <ShieldCheck className="h-5 w-5" /> },
  { id: "guard-day", name: "On-Site Guard — Day Shift", category: "Guarding", price: 4800, unit: "week", desc: "PSIRA-registered officer, 12-hour day shift.", icon: <Users className="h-5 w-5" /> },
  { id: "guard-night", name: "On-Site Guard — Night Shift", category: "Guarding", price: 5400, unit: "week", desc: "PSIRA-registered officer, 12-hour night shift.", icon: <Users className="h-5 w-5" /> },
];

const CATEGORIES = ["All", "Fencing", "CCTV", "Access", "Alarm", "Guarding"] as const;

function SafeguardPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [cart, setCart] = useState<Record<string, number>>({});

  const filtered = useMemo(() => (cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)), [cat]);
  const items = Object.entries(cart).map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === id)!, qty }));
  const total = items.reduce((s, i) => s + i.p.price * i.qty, 0);

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const sub = (id: string) => setCart((c) => {
    const n = (c[id] ?? 0) - 1;
    const next = { ...c };
    if (n <= 0) delete next[id]; else next[id] = n;
    return next;
  });
  const remove = (id: string) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });

  const orderText = () => {
    const lines = items.map((i) => `• ${i.p.name} × ${i.qty} — R${(i.p.price * i.qty).toLocaleString()}`);
    return `Hi Safeguard, I'd like to order:\n${lines.join("\n")}\n\nTotal: R${total.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1a1a]">
      {/* Standalone header */}
      <header className="border-b border-[#5a1a1a]/15 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Safeguard Security Solutions" className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold tracking-tight text-[#1f3b66] sm:text-lg">SAFEGUARD</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a01e23] sm:text-xs">Security Solutions</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#1f3b66] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15294a] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3a0e10] via-[#5a1a1a] to-[#1f3b66]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Johannesburg
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Your trusted <span className="text-[#ff6b6b]">security</span> partner.
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              Electric fencing, CCTV surveillance, gate motors, and on-site guarding — designed,
              installed and maintained for homes, businesses and complexes across Gauteng.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#catalogue" className="rounded-full bg-[#a01e23] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#a01e23]/30 transition hover:bg-[#7a161a]">
                Shop the catalogue
              </a>
              <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Get a quote
              </a>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-8 -z-10 rounded-full bg-white/10 blur-3xl" />
            <img src={logo.url} alt="Safeguard shield" className="mx-auto w-64 drop-shadow-2xl md:w-80" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold text-[#5a1a1a] md:text-4xl">Our core services</h2>
        <p className="mt-2 max-w-2xl text-[#3a1a1a]/70">From installation to full-spectrum complex guarding — one trusted team.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { i: <Zap className="h-5 w-5" />, t: "Installation & Repairs", d: "Electric fencing, CCTV and gate motors — expertly fitted and maintained." },
            { i: <Users className="h-5 w-5" />, t: "Security Guards", d: "PSIRA-registered officers for estates, commercial and industrial sites." },
            { i: <ShieldCheck className="h-5 w-5" />, t: "Complex Solutions", d: "Integrated guarding with access control and perimeter monitoring." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-[#5a1a1a]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#1f3b66] text-white">{s.i}</div>
              <h3 className="mt-4 font-display text-lg font-bold text-[#1f3b66]">{s.t}</h3>
              <p className="mt-1 text-sm text-[#3a1a1a]/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a01e23]">Product catalogue</span>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-[#5a1a1a] md:text-4xl">Available products</h2>
              <p className="mt-2 max-w-2xl text-[#3a1a1a]/70">Browse what's in stock, add to your order and send it via WhatsApp — we'll confirm installation.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    cat === c
                      ? "border-[#a01e23] bg-[#a01e23] text-white"
                      : "border-[#5a1a1a]/20 bg-white text-[#5a1a1a] hover:bg-[#5a1a1a]/5"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="flex flex-col rounded-2xl border border-[#5a1a1a]/10 bg-[#fdf8f6] p-5 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#1f3b66] text-white">{p.icon}</div>
                  <span className="rounded-full bg-[#a01e23]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#a01e23]">{p.category}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#1f3b66]">{p.name}</h3>
                <p className="mt-1 flex-1 text-sm text-[#3a1a1a]/70">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-display text-xl font-extrabold text-[#5a1a1a]">R{p.price.toLocaleString()}</div>
                    <div className="text-[11px] uppercase tracking-wider text-[#3a1a1a]/50">per {p.unit}</div>
                  </div>
                  {cart[p.id] ? (
                    <div className="inline-flex items-center gap-1 rounded-full border border-[#5a1a1a]/20 bg-white p-1">
                      <button onClick={() => sub(p.id)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-[#5a1a1a]/10"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="min-w-6 text-center text-sm font-bold">{cart[p.id]}</span>
                      <button onClick={() => add(p.id)} className="grid h-7 w-7 place-items-center rounded-full bg-[#a01e23] text-white hover:bg-[#7a161a]"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                  ) : (
                    <button onClick={() => add(p.id)} className="inline-flex items-center gap-1.5 rounded-full bg-[#1f3b66] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#15294a]">
                      <Plus className="h-3.5 w-3.5" /> Add
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Order summary */}
      {items.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-[#5a1a1a]/15 bg-white p-6 shadow-lg md:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#a01e23] text-white"><ShoppingCart className="h-5 w-5" /></div>
              <h3 className="font-display text-2xl font-extrabold text-[#5a1a1a]">Your order</h3>
            </div>
            <ul className="mt-5 divide-y divide-[#5a1a1a]/10">
              {items.map(({ p, qty }) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <div className="font-semibold text-[#1f3b66]">{p.name}</div>
                    <div className="text-xs text-[#3a1a1a]/60">R{p.price.toLocaleString()} × {qty}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-display font-bold text-[#5a1a1a]">R{(p.price * qty).toLocaleString()}</div>
                    <button onClick={() => remove(p.id)} className="grid h-8 w-8 place-items-center rounded-full text-[#a01e23] hover:bg-[#a01e23]/10"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#5a1a1a]/10 pt-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#3a1a1a]/60">Total</div>
                <div className="font-display text-3xl font-extrabold text-[#5a1a1a]">R{total.toLocaleString()}</div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(orderText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1ebe57]"
              >
                <MessageCircle className="h-4 w-4" /> Send order on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Why us */}
      <section className="bg-[#1f3b66] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Why choose Safeguard?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              { t: "Local Expertise", d: "Deep knowledge of Johannesburg's security landscape." },
              { t: "Skilled Team", d: "Qualified technicians, PSIRA-registered officers." },
              { t: "Custom Solutions", d: "Plans tailored to your property and budget." },
              { t: "Prompt & Reliable", d: "Trust, accountability and quick turnaround." },
            ].map((w) => (
              <div key={w.t} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-lg font-bold text-[#ff6b6b]">{w.t}</div>
                <p className="mt-1 text-sm text-white/80">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold text-[#5a1a1a] md:text-4xl">Let's secure your future together</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Visit us" value="8 Botterblom Street, Winchester Hills, Johannesburg, 2091" />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Call us" value="Phone number (to be confirmed)" />
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email us" value="Email address (to be confirmed)" />
        </div>
      </section>

      <footer className="border-t border-[#5a1a1a]/15 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="" className="h-8 w-auto" />
            <span className="font-display text-sm font-extrabold text-[#1f3b66]">SAFEGUARD <span className="text-[#a01e23]">SECURITY SOLUTIONS</span></span>
          </div>
          <p className="text-xs text-[#3a1a1a]/60">Professional. Local. Dependable. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#5a1a1a]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-[#a01e23]">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-[#1f3b66]">{value}</p>
    </div>
  );
}
