import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import BaseLayout from "../components/baselayout.jsx";

export default function indexPage(request) {
  const { params } = new URL(request.url);
  const v = params.get("value");

  return (<BaseLayout>
    Index Page { v }
  </BaseLayout>)
}
