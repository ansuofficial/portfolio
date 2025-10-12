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
      type: "image/png",
      href: "/apple-touch-icon.png",
    },
  ];
};


export const meta: MetaFunction = () => {
  return [
    { title: "Ansu Badjie | Frontend Software Developer" },
    {
      name: "description",
      content:
        "Portfolio of Ansu Badjie — a frontend software developer specializing in TypeScript, JavaScript, and modern UI development with Remix, React, Figma, and Tailwind CSS. Also a Python instructor with a strong passion for clean, functional, and visually engaging interfaces.",
    },
    { name: "author", content: "Ansu Badjie" },
    {
      name: "keywords",
      content:
        "Ansu Badjie, Ansumana Badjie, Ansu Badjie Gambia, Ansumana Badjie Gambia, frontend developer, software developer, TypeScript, JavaScript, Python instructor, RemixJS, React developer, Tailwind CSS, web developer portfolio, creative developer",
    },

    // --- OpenGraph (for Facebook, LinkedIn, etc.) ---
    { property: "og:title", content: "Ansu Badjie | Frontend Software Developer" },
    {
      property: "og:description",
      content:
        "Creative frontend software developer with expertise in Remix, React, Figma, TypeScript, and Tailwind CSS. Passionate about crafting modern and functional web experiences.",
    },
    { property: "og:image", content: "https://ansu-dev.vercel.app/ansu-dp-transparent.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ansu-dev.vercel.app/" },

    // --- Twitter Cards ---
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Ansu Badjie | Frontend Software Developer" },
    {
      name: "twitter:description",
      content:
        "Portfolio of Ansu Badjie — frontend developer skilled in TypeScript, JavaScript, and RemixJS. Passionate about building modern web solutions.",
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
      "jobTitle": "Frontend Software Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Independent"
      },
      "description":
        "Ansu Badjie is a frontend software developer from The Gambia specializing in TypeScript, JavaScript, Remix, Figma, and React. Also a Python instructor passionate about sharing knowledge.",
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
      <body className="overflow-x-hidden  bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed">
        <motion.div
          className="px-2 sm:px-4 md:px-6 mb-4"
          initial={{ y: -500 }}
          animate={{
            y: 0,
            transition: { type: "spring", stiffness: 200 },
          }}
        >
          <NavBar />
        </motion.div>

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
