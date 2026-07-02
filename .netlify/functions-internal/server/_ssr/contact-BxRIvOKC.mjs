import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as founderAsset } from "./founder-_1AVrB1Y.mjs";
import { c as MessageCircle, d as Phone, e as Mail, f as MapPin } from "../_libs/lucide-react.mjs";
const WHATSAPP_NUMBER = "27731794085";
const PHONE_TEL = "+27731794085";
const PHONE_DISPLAY = "+27 73 179 4085";
const CONTACT_EMAIL = "khombashuttles@gmail.com";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi KGC, I'd like to make a booking.")}`;
const GMAIL_SUBJECT = "Booking enquiry — KGC";
const GMAIL_BODY = "Hi KGC team,\n\nI'd like to enquire about a booking.\n\n";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(GMAIL_SUBJECT)}&body=${encodeURIComponent(GMAIL_BODY)}`;
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 md:grid-cols-[1fr_1.2fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-sm animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border bg-card shadow-elegant hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: founderAsset, alt: "Mr Benjamin Khomba — Founder of Khomba Group Courier", loading: "lazy", className: "aspect-square w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Mr Benjamin Khomba" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Founder & Managing Director" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold md:text-5xl", children: [
        "Talk to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Bookings, quotes, security or supplier requests — we're a message away." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }), label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL, external: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), label: "Call", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }), label: "Email", value: CONTACT_EMAIL, href: GMAIL_URL, external: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: "Service area", value: "City & airport runs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "btn-grey-glow inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp us"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE_TEL}`, className: "inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " Call us"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GMAIL_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          " Email us"
        ] })
      ] })
    ] })
  ] }) });
}
function Row({
  icon,
  label,
  value,
  href,
  external
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-colors hover:bg-accent/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: value })
    ] })
  ] });
  if (!href) return inner;
  return external ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, children: inner });
}
export {
  ContactPage as component
};
