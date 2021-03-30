import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import BaseLayout from "../components/baselayout.jsx";

export default function error404Page(request) {
  return (
    <BaseLayout>
      <div>
        <h1>Page not found</h1>
      </div>
    </BaseLayout>
  );
}