import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as founderAsset } from "./founder-_1AVrB1Y.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 md:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border bg-card shadow-elegant hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: founderAsset, alt: "Mr Benjamin Khomba — Founder of Khomba Group Courier", loading: "lazy", className: "w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Mr Benjamin Khomba" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Founder & Managing Director" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-widest text-primary", children: "Est. in Johannesburg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold md:text-5xl", children: [
          "About ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Khomba Group" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Khomba Group Courier was built on simplicity — a safe ride, dependable security, and reliable suppliers, all under one name." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: ["Shuttles", "Security", "Suppliers"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: s }, s)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t bg-card/50 px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-10 text-xs font-semibold uppercase tracking-widest text-primary", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: "1", title: "Tell us your trip", desc: "Pickup, destination, date and ride type." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: "2", title: "Message on WhatsApp", desc: "One tap opens a chat with the driver." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: "3", title: "Hop in", desc: "Your driver confirms and arrives in the white Jolion." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { label: "Personal", desc: "Every booking handled with care." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { label: "Reliable", desc: "The job gets done right, every time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { label: "Trusted", desc: "One name, three services." })
    ] }) })
  ] });
}
function Step({
  n,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift rounded-2xl border bg-card p-6 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
  ] });
}
function Value({
  label,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-primary", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
  ] });
}
export {
  AboutPage as component
};
