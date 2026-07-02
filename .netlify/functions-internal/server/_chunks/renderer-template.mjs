import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse(`<!doctype html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>KGC — Shuttles, Security & Suppliers</title>\r
    <meta name="description" content="Book a white Haval Jolion shuttle, hire trusted security, or work with our suppliers — all via WhatsApp." />\r
\r
    <link rel="icon" href="/favicon.ico" sizes="any" />\r
    <link rel="icon" type="image/png" href="/favicon.png?v=3" />\r
    <link rel="apple-touch-icon" href="/favicon.png?v=3" />\r
  </head>\r
  <body>\r
    <div id="root"></div>\r
\r
    <!--\r
      BOOT DIAGNOSTICS (safe to remove once things are stable)\r
\r
      What this does:\r
      - Logs each stage of page boot to the console with a "[boot]" prefix,\r
        so you can filter devtools console by "boot" and see exactly how far\r
        things got.\r
      - Catches JS errors and unhandled promise rejections that happen before\r
        React mounts (these are invisible otherwise — a white screen with no\r
        console.error visible unless devtools happens to be open at the time).\r
      - If #root is still empty ~4s after the page loads, assumes the app\r
        failed to mount and shows a visible on-page panel (not just console)\r
        with whatever error info was captured. This matters because most\r
        people reporting "it's blank" won't have devtools open.\r
\r
      Where to look when something's wrong, in order:\r
      1. THIS panel / browser console (Cmd+Opt+J or F12) — client-side JS\r
         errors, 404s on asset files (wrong publish dir), CSP/CORS blocks.\r
      2. Network tab — check the request for your main JS bundle\r
         (something like /assets/index-XXXX.js). 404 there = publish\r
         directory/build output mismatch. 200 but blank = runtime JS error,\r
         check console.\r
      3. Netlify dashboard → your site → Deploys → click the latest deploy →\r
         "Deploy log" — build-time failures (npm install/build errors) show\r
         here. This is the only place that shows if the BUILD itself failed.\r
      4. Netlify dashboard → your site → Logs → Functions (or "Edge\r
         functions") — if TanStack Start's SSR function is erroring, it\r
         won't show in browser console at all, only here.\r
    -->\r
    <script>\r
      (function () {\r
        var log = function (msg) {\r
          console.log("[boot] " + msg);\r
        };\r
        var errors = [];\r
\r
        log("index.html parsed, starting boot checks");\r
\r
        window.addEventListener("error", function (e) {\r
          var info = (e.filename || "unknown file") + ":" + e.lineno + " — " + e.message;\r
          errors.push(info);\r
          console.error("[boot] uncaught error: " + info);\r
        });\r
\r
        window.addEventListener("unhandledrejection", function (e) {\r
          var info = "unhandled promise rejection: " + (e.reason && e.reason.message ? e.reason.message : e.reason);\r
          errors.push(info);\r
          console.error("[boot] " + info);\r
        });\r
\r
        window.addEventListener("DOMContentLoaded", function () {\r
          log("DOMContentLoaded fired");\r
        });\r
\r
        window.addEventListener("load", function () {\r
          log("window load fired, root has " + document.getElementById("root").children.length + " children so far");\r
        });\r
\r
        setTimeout(function () {\r
          var root = document.getElementById("root");\r
          if (root && root.children.length === 0) {\r
            console.error("[boot] root is still empty after 4s — app did not mount. Errors captured: " + (errors.length || "none"));\r
            var panel = document.createElement("div");\r
            panel.style.cssText =\r
              "position:fixed;inset:0;background:#111;color:#f5f5f5;font:14px/1.5 monospace;padding:24px;z-index:99999;overflow:auto;";\r
            var errorList = errors.length\r
              ? errors.map(function (e) { return "<li>" + e.replace(/</g, "&lt;") + "</li>"; }).join("")\r
              : "<li>No JS errors were caught — check the Network tab for a failed/missing bundle request, or the Netlify deploy log for a build failure.</li>";\r
            panel.innerHTML =\r
              "<h2 style='margin-top:0'>App failed to load</h2>" +\r
              "<p>This page is a fallback shown because nothing rendered into #root within 4 seconds.</p>" +\r
              "<p><strong>Captured errors:</strong></p><ul>" + errorList + "</ul>" +\r
              "<p>Next steps: open devtools console/network tab, then check your Netlify deploy log and function logs.</p>";\r
            document.body.appendChild(panel);\r
          } else {\r
            log("root has content, app mounted successfully");\r
          }\r
        }, 4000);\r
      })();\r
    <\/script>\r
  </body>\r
</html>`, { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
