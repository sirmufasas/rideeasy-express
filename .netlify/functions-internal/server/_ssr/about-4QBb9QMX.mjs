import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Truck, b as ShieldCheck, m as Users, c as MessageCircle } from "../_libs/lucide-react.mjs";
const WHATSAPP_NUMBER = "27731794085";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi KGC, I'd like to know more about your services.")}`;
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold md:text-5xl", children: [
        "About ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "KGC" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "KGC was built on a simple idea: getting a ride, hiring security, or working with a supplier shouldn't be complicated. No apps to download, no accounts to create — just a message on WhatsApp and it's sorted." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From our shuttle to vetted security personnel and trusted supplier partners, we focus on being reliable, easy to reach, and easy to work with." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5" }), title: "Shuttles", description: "Book a ride for city and airport runs, quick and comfortable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }), title: "Security", description: "Trusted, vetted security personnel available when and where you need them." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }), title: "Suppliers", description: "A network of reliable suppliers we work with directly, so you don't have to chase anyone." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
      " Chat to us on WhatsApp"
    ] }) })
  ] });
}
function ServiceCard({
  icon,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 text-center shadow-elegant hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: description })
  ] });
}
export {
  AboutPage as component
};
