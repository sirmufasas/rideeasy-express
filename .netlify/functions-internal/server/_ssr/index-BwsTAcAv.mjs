import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CarLoader, c as carImg } from "./CarLoader-BOTZfKMM.mjs";
import { m as Star, n as Clock, b as ShieldCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const heroBg = "/assets/hero-bg-BMbjOFOf.jpg";
function Home() {
  const [booting, setBooting] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!booting) return;
    const t = setTimeout(() => setBooting(false), 6e3);
    return () => clearTimeout(t);
  }, [booting]);
  if (booting) return /* @__PURE__ */ jsxRuntimeExports.jsx(CarLoader, { label: "Starting your engine…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-cover bg-center opacity-30", style: {
      backgroundImage: `url(${heroBg})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_1fr] md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-ring h-1.5 w-1.5 rounded-full bg-primary" }),
          "Drivers online now"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl", children: [
          "Your ride, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "on your terms." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-lg text-base text-muted-foreground md:text-lg", children: "Premium shuttle service in a spotless white Haval Jolion. Pick where, when and how — we'll deliver it through a single WhatsApp message." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground", children: "Book a ride" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "btn-grey-glow inline-flex items-center gap-2 bg-card px-6 py-3 text-sm font-semibold text-foreground", children: "Our services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }), label: "4.9 rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }), label: "On-time pickup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }), label: "Vetted driver" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: carImg, alt: "White Haval Jolion", className: "animate-bob mx-auto w-full max-w-md drop-shadow-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "road-stripes mx-auto mt-2 h-[2px] w-3/4 opacity-50" })
      ] })
    ] })
  ] });
}
function Stat({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
    label
  ] });
}
export {
  Home as component
};
