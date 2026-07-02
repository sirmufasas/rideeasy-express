import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>KGC — Shuttles, Security & Suppliers</title>\r\n    <meta name="description" content="Book a white Haval Jolion shuttle, hire trusted security, or work with our suppliers — all via WhatsApp." />\r\n\r\n    <link rel="icon" href="/favicon.ico" sizes="any" />\r\n    <link rel="icon" type="image/png" href="/favicon.png?v=3" />\r\n    <link rel="apple-touch-icon" href="/favicon.png?v=3" />\r\n  </head>\r\n  <body>\r\n    <div id="root"></div>\r\n  </body>\r\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
