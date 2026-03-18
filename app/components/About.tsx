import { memo } from "react";

interface AboutProps {
  styles?: string;
}

function About({ styles = "" }: AboutProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 lg:p-8 space-y-4 h-full max-h-[17.5rem] overflow-hidden flex flex-col ${styles}`}
      role="region"
      aria-labelledby="about-heading"
    >
      <h1
        id="about-heading"
        className="text-white text-2xl font-display font-bold tracking-tight"
      >
        Who am I?
      </h1>
      <p className="text-white/80 text-base leading-relaxed tracking-wide text-balance overflow-auto pr-1">
        I'm Ansumana, a Frontend Engineer who builds production-ready web
        applications with a focus on performance, maintainable architecture, and
        accessibility. I work comfortably across UI systems and real-world
        integrations—turning product requirements into reliable, scalable
        experiences that ship, evolve, and stay fast.
      </p>
    </div>
  );
}

export default memo(About);

// Finance
// Opportunities page
