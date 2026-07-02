import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const carImg = "/assets/haval-jolion-B6FDiODk.png";
function CarLoader({ label = "Connecting your driver…" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl", children: "WELCOME TO KGC SHUTTLES" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-drive mx-auto w-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: carImg,
          alt: "",
          "aria-hidden": true,
          className: "h-32 w-auto scale-x-[-1] drop-shadow-[0_20px_30px_rgba(37,99,235,0.25)] md:h-44"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "road-stripes mx-auto mt-2 h-[2px] w-[90%] opacity-40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm font-medium tracking-wide text-muted-foreground", children: label })
  ] });
}
export {
  CarLoader as C,
  carImg as c
};
