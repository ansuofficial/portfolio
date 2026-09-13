import { memo } from "react";

interface AboutProps {
  styles?: string;
}

function About({ styles = "" }: AboutProps) {
  return (
    <div
      className={`glass rounded-xl p-6 lg:p-8 space-y-5 h-full flex flex-col ${styles}`}
      role="region"
      aria-labelledby="about-heading"
      id="about"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="h-14 w-14 md:h-16 md:w-16 relative rounded-full overflow-hidden ring-2 ring-white/15">
            <img
              className="object-cover w-full h-full object-[center_top] scale-105"
              src="/ansu-dp-transparent.png"
              alt="Ansumana Badjie"
              width={64}
              height={64}
            />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-secondary rounded-full border-2 border-[#0a0e14]" />
        </div>
        <div>
          <h1
            id="about-heading"
            className="text-white text-2xl md:text-3xl font-display font-bold tracking-tight"
          >
            Ansumana Badjie
          </h1>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

      <p className="text-white/80 text-base leading-relaxed tracking-wide text-balance">
        I build software that solves real problems — from government platforms
        handling public-facing services to multi-service consumer apps processing
        real transactions. I bring the full picture: architecture, performance,
        integrations, and delivery. If your business needs software that works
        under real-world pressure and scales with complexity, that's what I do.
      </p>
    </div>
  );
}

export default memo(About);
