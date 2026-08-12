import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
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
    { title: "Ansu Badjie | Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Ansu Badjie — a Software Engineer who builds production-ready applications that solve real business problems. Specializing in scalable architecture, API integrations, and high-performance web platforms.",
    },
    { name: "author", content: "Ansu Badjie" },
    {
      name: "keywords",
      content:
        "Ansu Badjie, Ansumana Badjie, software engineer, full-stack developer, TypeScript, JavaScript, React, Remix, Next.js, web performance, accessibility, UI architecture, API integration, software consultancy",
    },

    // --- OpenGraph (for Facebook, LinkedIn, etc.) ---
    { property: "og:title", content: "Ansu Badjie | Software Engineer" },
    {
      property: "og:description",
      content:
        "Software Engineer building production-ready applications — scalable architecture, API integrations, and high-performance web platforms that solve real problems.",
    },
    {
      property: "og:image",
      content: "https://ansu-dev.vercel.app/ansu-dp-transparent.png",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ansu-dev.vercel.app/" },

    // --- Twitter Cards ---
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Ansu Badjie | Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Software Engineer building production-ready applications with TypeScript, React, and modern engineering — fast, accessible, and built to last.",
    },
    {
      name: "twitter:image",
      content: "https://ansu-dev.vercel.app/ansu-dp-transparent.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ansu Badjie",
              url: "https://ansu-dev.vercel.app/",
              image:
                "https://ansu-dev.vercel.app/ansu-dp-transparent.png",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Independent",
              },
              description:
                "Ansu Badjie is a Software Engineer who builds production-ready applications that solve real business problems. Specializing in scalable architecture, API integrations, and high-performance web platforms.",
              sameAs: [
                "https://github.com/ansuofficial",
                "https://www.linkedin.com/in/ansu-badjie/",
                "https://x.com/ansucoder",
              ],
            }),
          }}
        />
        <link
          rel="canonical"
          href="https://ansu-dev.vercel.app/"
        />
      </head>
      <body className="overflow-x-hidden min-h-screen">
        <NavBar />

        <div className="pt-24 md:pt-20">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
