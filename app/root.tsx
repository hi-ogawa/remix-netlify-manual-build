import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import { LinksFunction } from "@remix-run/server-runtime";
import * as React from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: require("./index.css") }];
};

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>remix-netlify-manual-build</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
