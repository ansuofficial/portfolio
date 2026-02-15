import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { memo } from "react";

interface Project {
  title: string;
  desc: string;
  href: string;
  thumbnail: string;
  stacks: Array<{ name: string; bg: string; text: string }>;
  metrics?: {
    seo?: number;
    accessibility?: number;
    performance?: number;
  };
  type?: string;
}

const projects: Project[] = [
  {
    title: "Brikama Area Council",
    desc: "A fullstack and responsive modern website with exceptional Search Engine Optimization, accessibility, and performance metrics. Built for a government institution requiring robust functionality and user experience.",
    href: "https://www.brikama.gm/",
    thumbnail: "/bac-thumbnail.png",
    stacks: [
      { name: "Next.js", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
      { name: "Google Translate", bg: "bg-[#FFD700]", text: "text-black" },
      { name: "Framer Motion", bg: "bg-[#EF4444]", text: "text-white" },
    ],
    metrics: { seo: 95, accessibility: 90, performance: 80 },
    type: "Government Platform",
  },
  {
    title: "National Food Security Processing and Marketing Corporation",
    desc: "A comprehensive full-stack platform for The Gambia's national food security corporation. Features modern architecture, responsive design, and optimized performance for critical public services.",
    href: "https://www.nfsc.gm/",
    thumbnail: "/project-1.png",
    stacks: [
      { name: "Remix", bg: "bg-[#121212]", text: "text-white" },
      { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
      { name: "Framer Motion", bg: "bg-[#EF4444]", text: "text-white" },
    ],
    metrics: { seo: 95, accessibility: 90, performance: 80 },
    type: "Enterprise Platform",
  },
  {
    title: "Wolurek",
    desc: "The Gambia's leading platform trusted by individuals and government institutions. Simplifies daily tasks including package delivery, bill payments, and ticket purchases with a seamless, modern, and high-performing design.",
    href: "https://wolurek.com/",
    thumbnail: "/wolurek.png",
    stacks: [
      { name: "AngularJS", bg: "bg-[#DD0031]", text: "text-white" },
    ],
    type: "E-Commerce Platform",
  },
  {
    title: "Space Website",
    desc: "An interactive and responsive space exploration website featuring complex routing and multi-page architecture. Demonstrates excellent UI/UX principles with strong SEO, performance, and accessibility scores.",
    href: "https://spacewebsite-jcc.vercel.app/",
    thumbnail: "/space-website-thumbnail.png",
    stacks: [
      { name: "React", bg: "bg-[#61DAFB]", text: "text-black" },
      { name: "Tailwind CSS", bg: "bg-[#38BDF8]", text: "text-white" },
      { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
    ],
    type: "Educational Platform",
  },
  {
    title: "UIPool",
    desc: "A comprehensive UI component library that empowers developers to integrate high-quality UI solutions into their projects. Streamlines workflow and accelerates development with beautiful, responsive interface components.",
    href: "https://uipool.vercel.app/",
    thumbnail: "/uipool-thumbnail.png",
    stacks: [
      { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
      { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
    ],
    type: "Design System",
  },
  {
    title: "Spend The Gambia's GDP",
    desc: "A creative data visualization platform that enables users to explore and simulate how The Gambia's GDP could be allocated. Combines interactive design, data analytics, and user engagement for an insightful experience.",
    href: "https://rich-gambian.vercel.app/",
    thumbnail: "/rich-gambian.png",
    stacks: [
      { name: "Next.js", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
    ],
    type: "Data Visualization",
  },
  {
    title: "Wave Mobile App UI/UX",
    desc: "A modern, finance-themed UI/UX design concept created in Figma. Focuses on simplicity, usability, and smooth user interaction for digital payment and money transfer experiences.",
    href: "https://www.figma.com/proto/5YHOE7YbgbdDYCPOyULMnq/wave-web-prototype?node-id=1-2&t=0dpOlgr7n3VoH0Ns-1",
    thumbnail: "/Wave inspiration.png",
    stacks: [
      { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white" },
    ],
    type: "UI/UX Design",
  },
  {
    title: "Card Manager UI/UX",
    desc: "A clean and minimalistic Figma design showcasing an intelligent card management dashboard. Features real-time tracking, spending insights, and intuitive navigation for enhanced user engagement.",
    href: "https://www.figma.com/proto/gdwt79Qit6gtWOwTqoPWfL/Untitled?node-id=6-22&t=0dpOlgr7n3VoH0Ns-1",
    thumbnail: "/figma-ui.png",
    stacks: [
      { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white" },
    ],
    type: "UI/UX Design",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Ansu Badjie" },
    {
      name: "description",
      content:
        "Explore projects by Ansumana Badjie - Frontend Developer. Modern web applications built with React, Remix, Next.js, and cutting-edge technologies.",
    },
  ];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  return (
    <article className="group">
      <div className="md:flex gap-8 items-start">
        {/* Project Image */}
        <Link
          to={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block flex-shrink-0 w-full md:w-[480px] lg:w-[520px]"
          aria-label={`View ${project.title} project`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
              width={520}
              height={320}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        {/* Project Content */}
        <div className="flex-1 flex flex-col gap-5 mt-6 md:mt-0">
          {/* Title & Description Card */}
          <Link
            to={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="glass rounded-2xl p-6 lg:p-8 space-y-4 transition-all duration-300 group-hover:bg-white/8 group-hover:shadow-xl group-hover:shadow-black/20">
              {/* Header Section */}
              <div className="space-y-3">
                {project.type && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      {project.type}
                    </span>
                    {project.metrics && (
                      <div className="h-1 w-1 rounded-full bg-white/30" />
                    )}
                    {project.metrics?.seo && (
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span className="font-medium">SEO {project.metrics.seo}%</span>
                        {project.metrics.accessibility && (
                          <>
                            <span className="text-white/30">•</span>
                            <span className="font-medium">A11y {project.metrics.accessibility}%</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          </Link>

          {/* Tech Stack Card */}
          <div className="glass rounded-2xl p-5 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                Technologies
              </h4>
              <Link
                to={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
              >
                View Project
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.stacks.map((stack) => (
                <span
                  key={stack.name}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wide rounded-lg transition-all duration-200 hover:scale-105 ${stack.bg} ${stack.text}`}
                >
                  {stack.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

function Projects() {
  return (
    <main className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Page Header */}
        <div className="mb-16 space-y-3">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Selected Projects
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            A collection of modern web applications and design systems built with
            cutting-edge technologies and best practices.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.href} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default memo(Projects);
