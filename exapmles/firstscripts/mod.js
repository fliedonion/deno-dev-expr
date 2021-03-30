import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import baseLayout from "./baselayout.jsx";
import notFound from "./notfound.jsx";

serve({
  "/": baseLayout,
  "/empty": () => new Response(`<html>
    <head><title>Empty</title></head>
    <body>
    </body>
    </html>`, {headers: {"content-type": "text/html; charset=utf-8"}}),
  404: notFound,
});