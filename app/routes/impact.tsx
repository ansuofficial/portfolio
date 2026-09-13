import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { memo } from "react";
import { motion } from "motion/react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  results: string[];
  href: string;
  thumbnail: string;
  metrics?: {
    seo?: number;
    accessibility?: number;
    performance?: number;
  };
  type?: string;
}

const projects: Project[] = [
  {
    title: "National Food Security Processing & Marketing Corp.",
    problem:
      "No scalable digital platform existed for public-facing food security services.",
    solution:
      "Built a performant, responsive platform with clear information hierarchy.",
    results: [
      "95% SEO score",
      "90% accessibility compliance",
      "Scalable architecture for growing content",
    ],
    href: "https://www.nfsc.gm/",
    thumbnail: "/project-1.png",
    metrics: { seo: 95, accessibility: 90, performance: 80 },
    type: "Enterprise Platform",
  },
  {
    title: "ADN Academy",
    problem:
      "A leading forex academy needed a credible online presence to attract serious traders and drive enrollments.",
    solution:
      "Built a polished, conversion-focused site that showcases programs, mentorship, and student outcomes.",
    results: [
      "500+ students trained across programs",
      "6 structured trading programs presented clearly",
      "Professional brand experience built for enrollment",
    ],
    href: "https://www.adnacademy.gm/",
    thumbnail: "/adn-trading-screenshot.png",
    type: "Trading Academy",
  },
  {
    title: "Brikama Area Council",
    problem:
      "An outdated, inaccessible site made it hard for citizens to access council services online.",
    solution:
      "Shipped a modern, search-friendly platform built for accessibility and real-world traffic.",
    results: [
      "95% SEO score on Lighthouse",
      "90% accessibility compliance",
      "80% performance score under load",
    ],
    href: "https://www.brikama.gm/",
    thumbnail: "/bac-thumbnail.png",
    metrics: { seo: 95, accessibility: 90, performance: 80 },
    type: "Government Platform",
  },
  {
    title: "Wolurek",
    problem:
      "Critical delivery, payment, and ticketing flows needed a frontend users could trust under load.",
    solution:
      "Delivered a fast, reliable UI optimized for smooth end-to-end transactions.",
    results: [
      "Smooth transaction flows across services",
      "Reduced friction in payment journeys",
      "Reliable UI under high transaction volume",
    ],
    href: "https://wolurek.com/",
    thumbnail: "/wolurek.png",
    type: "E-Commerce Platform",
  },
  {
    title: "Bala Engineering & Construction LTD",
    problem:
      "A growing engineering firm needed a professional site to showcase its work and win new clients.",
    solution:
      "Built a polished company website with services, project portfolio, and client trust signals.",
    results: [
      "30+ completed projects showcased",
      "50+ clients served across The Gambia",
      "Clear path from discovery to contact and inquiry",
    ],
    href: "https://www.becl.gm/",
    thumbnail: "/becl-screenshot.png",
    type: "Construction & Engineering",
  },

  // {
  //   title: "Space Website",
  //   problem:
  //     "An educational platform needed a structured, multi-page web application with clear navigation and strong accessibility for diverse audiences.",
  //   solution:
  //     "Built a multi-page React app with structured routing and component-driven architecture, focused on performance, accessibility, and responsive layouts.",
  //   results: [
  //     "Clean multi-page navigation",
  //     "Component-driven architecture",
  //     "Fully responsive across devices",
  //   ],
  //   href: "https://spacewebsite-jcc.vercel.app/",
  //   thumbnail: "/space-website-thumbnail.png",
  //   stacks: [
  //     { name: "React", bg: "bg-[#61DAFB]", text: "text-black" },
  //     { name: "Tailwind CSS", bg: "bg-[#38BDF8]", text: "text-white" },
  //     { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
  //   ],
  //   type: "Educational Platform",
  // },
  // {
  //   title: "UIPool",
  //   problem:
  //     "Development teams needed a standardized set of reusable UI components to reduce inconsistency and speed up delivery across products.",
  //   solution:
  //     "Built a composable UI component library designed for long-term maintainability, responsiveness, and consistency across multiple products.",
  //   results: [
  //     "Standardized UI patterns across products",
  //     "Faster delivery with reusable components",
  //     "Consistent design language",
  //   ],
  //   href: "https://uipool.vercel.app/",
  //   thumbnail: "/uipool-thumbnail.png",
  //   stacks: [
  //     { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
  //     { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
  //   ],
  //   type: "Design System",
  // },
  // {
  //   title: "Spend The Gambia's GDP",
  //   problem:
  //     "Citizens needed an engaging way to understand national budget allocation and explore trade-offs in GDP spending scenarios.",
  //   solution:
  //     "Built an interactive data visualization experience that lets users simulate GDP allocation with clear information hierarchy and smooth interactions.",
  //   results: [
  //     "Engaging interactive experience",
  //     "Clear data visualization",
  //     "Educational impact on budget awareness",
  //   ],
  //   href: "https://rich-gambian.vercel.app/",
  //   thumbnail: "/rich-gambian.png",
  //   stacks: [
  //     { name: "Next.js", bg: "bg-[#000000]", text: "text-white" },
  //     { name: "Tailwind CSS", bg: "bg-[#38bdf8]", text: "text-white" },
  //   ],
  //   type: "Data Visualization",
  // },
  // {
  //   title: "Wave Mobile App UI/UX",
  //   problem:
  //     "A finance product needed UI flows that reduce friction in core payment and money-transfer journeys for mobile users.",
  //   solution:
  //     "Designed a finance product UI concept focused on clear flows, predictable states, and strong usability for critical financial transactions.",
  //   results: [
  //     "Reduced friction in payment flows",
  //     "Clear, predictable navigation",
  //     "Optimized for mobile-first usage",
  //   ],
  //   href: "https://www.figma.com/proto/5YHOE7YbgbdDYCPOyULMnq/wave-web-prototype?node-id=1-2&t=0dpOlgr7n3VoH0Ns-1",
  //   thumbnail: "/Wave inspiration.png",
  //   stacks: [
  //     { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white" },
  //   ],
  //   type: "UI/UX Design",
  // },
  // {
  //   title: "Card Manager UI/UX",
  //   problem:
  //     "Users needed a clear dashboard for managing cards, tracking spending, and navigating financial insights without confusion.",
  //   solution:
  //     "Designed a dashboard UI with clear information architecture for card management, spending insights, and navigation that scales across states.",
  //   results: [
  //     "Intuitive card management flows",
  //     "Clear spending insight presentation",
  //     "Scalable dashboard architecture",
  //   ],
  //   href: "https://www.figma.com/proto/gdwt79Qit6gtWOwTqoPWfL/Untitled?node-id=6-22&t=0dpOlgr7n3VoH0Ns-1",
  //   thumbnail: "/figma-ui.png",
  //   stacks: [
  //     { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white" },
  //   ],
  //   type: "UI/UX Design",
  // },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Impact | Ansu Badjie" },
    {
      name: "description",
      content:
        "Explore the impact of Ansumana Badjie's work — Software Engineer. Production applications built to solve real business problems with measurable results.",
    },
  ];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="md:flex gap-8 items-start">
        {/* Project Image */}
        <Link
          to={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block flex-shrink-0 w-full md:w-[480px] lg:w-[520px]"
          aria-label={`View ${project.title} project`}
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
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
        <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-0">
          <div className="glass rounded-xl p-6 lg:p-8 space-y-4 transition-all duration-300 group-hover:bg-white/8 group-hover:shadow-xl group-hover:shadow-black/20">
            {/* Header */}
            <div className="space-y-3">
              {project.type && (
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  {project.type}
                </span>
              )}
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Problem */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                The Problem
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-secondary/80 uppercase tracking-wider">
                What I Built
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                Results
              </h4>
              <ul className="space-y-1">
                {project.results.map((result, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                to={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
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
          </div>
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

function Impact() {
  return (
    <main className="mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Page Header */}
        <motion.div
          className="mb-16 space-y-3"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Real Impact
            </h1>
            <a
              href="https://www.jassehcodecamp.com/#testimonials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap shrink-0"
            >
              Student Testimonials
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
            </a>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            Software I've built for real organizations solving real problems —
            with measurable results you can verify.
          </p>
        </motion.div>

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

export default memo(Impact);
