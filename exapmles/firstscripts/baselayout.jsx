import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";

export default function BaseLayout({ children }) {
  return (<html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
    </head>
    <body>
      Hello Layout
    </body>
  </html>);
}