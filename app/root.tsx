import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
// import "leaflet/dist/leaflet.css";
import { motion } from "motion/react"
import type { MetaFunction } from "@remix-run/node";

import type { LinksFunction } from "@remix-run/node";
import NavBar from "./components/NavBar";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "alternate icon",
      type: "image/png",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ];
};


export const meta: MetaFunction = () => {
  return [
    { title: "Ansu Badjie | Frontend Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Ansu Badjie — a Frontend Engineer specializing in TypeScript, React, and production-ready web applications. I build maintainable UI architecture, integrate APIs, and ship fast, accessible experiences with Remix and modern tooling.",
    },
    { name: "author", content: "Ansu Badjie" },
    {
      name: "keywords",
      content:
        "Ansu Badjie, Ansumana Badjie, frontend engineer, frontend developer, software engineer, TypeScript, JavaScript, React, Remix, Next.js, web performance, accessibility, UI architecture, design systems",
    },

    // --- OpenGraph (for Facebook, LinkedIn, etc.) ---
    { property: "og:title", content: "Ansu Badjie | Frontend Engineer" },
    {
      property: "og:description",
      content:
        "Frontend Engineer focused on performance, scalable UI architecture, and real-world integrations. Building production-ready web applications with TypeScript, React, and Remix.",
    },
    { property: "og:image", content: "https://ansu-dev.vercel.app/ansu-dp-transparent.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ansu-dev.vercel.app/" },

    // --- Twitter Cards ---
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Ansu Badjie | Frontend Engineer" },
    {
      name: "twitter:description",
      content:
        "Frontend Engineer building production-ready web applications with TypeScript, React, and Remix—fast, accessible, and maintainable by design.",
    },
    { name: "twitter:image", content: "https://ansu-dev.vercel.app/ansu-dp-transparent.png" },
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ansu Badjie",
      "url": "https://ansu-dev.vercel.app/",
      "image": "https://ansu-dev.vercel.app/ansu-dp-transparent.png",
      "jobTitle": "Frontend Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Independent"
      },
      "description":
        "Ansu Badjie is a Frontend Engineer specializing in TypeScript, React, and Remix. Builds performance-focused, maintainable UI systems and integrates real-world APIs to ship production-ready web applications.",
      "sameAs": [
        "https://github.com/ansuofficial",
        "https://www.linkedin.com/in/ansu-badjie/",
        "https://x.com/ansucoder"
      ]
    }),
  }}
/>
<link rel="canonical" href="https://ansu-dev.vercel.app/" />


      </head>
      <body className="overflow-x-hidden min-h-screen">
        <NavBar />

        <div className="pt-24 md:pt-20">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
