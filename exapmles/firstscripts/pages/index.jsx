import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import BaseLayout from "../components/baselayout.jsx";

export default function indexPage(request) {

  return (<BaseLayout>
    Index Page { v }
  </BaseLayout>)
}
