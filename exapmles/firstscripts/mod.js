import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import baseLayout from "./baselayout.jsx";

serve({
  "/": baseLayout,
  404: "notFoundPage",
});