import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import "leaflet/dist/leaflet.css";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/png",
      href: "/apple-touch-icon.png",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
