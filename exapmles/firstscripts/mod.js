import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import index from "./pages/index.jsx";
import error404 from "./pages/error404.jsx";

serve({
  "/": index,
  "/empty": () => new Response(`<html>
    <head><title>Empty</title></head>
    <body>
    </body>
    </html>`, {headers: {"content-type": "text/html; charset=utf-8"}}),
  404: error404,
});