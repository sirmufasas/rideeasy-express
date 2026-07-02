import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Car, b as ShieldCheck, P as PackageCheck } from "../_libs/lucide-react.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16 animate-fade-in-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold md:text-5xl", children: "Services offered" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-muted-foreground", children: "One team. Three trusted services — transport, protection and supply." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Service, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-5 w-5" }), title: "Shuttlers", desc: "Scheduled and on-demand rides in our white Haval Jolion." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Service, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }), title: "Security", desc: "Reliable security for private, event and business needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Service, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-5 w-5" }), title: "Suppliers", desc: "Supplier coordination for products and deliveries." })
    ] })
  ] });
}
function Service({
  icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift rounded-2xl border bg-card p-6 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: desc })
  ] });
}
export {
  ServicesPage as component
};
