import { memo } from "react";

interface WorkExperienceProps {
  styles?: string;
}

interface Experience {
  title: string;
  company: string;
  impact: string;
  period?: string;
}

const experiences: Experience[] = [
  {
    title: "Lead Frontend Engineer",
    company: "Jassehcodecamp",
    impact:
      "Led frontend delivery for production web apps — owned UI architecture, performance, and release quality across multiple client projects.",
    period: "Present",
  },
  {
    title: "Instructor",
    company: "JassehCodeCamp",
    impact:
      "Designed hands-on curricula and mentored 200+ engineers through practical, production-focused projects.",
    period: "2023 — Present",
  },
  {
    title: "Software Engineer Intern",
    company: "Gomindz",
    impact:
      "Contributed to shipped features in a team environment — learned delivery workflows and real-world code review discipline.",
    period: "2022",
  },
];

function WorkExperience({ styles = "" }: WorkExperienceProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 lg:p-8 space-y-5 flex flex-col h-full ${styles}`}
      role="region"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
      >
        Professional Experience
      </h2>
      <div className="relative flex-1">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="relative pl-7 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary/60 bg-[#0a0e14] group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                <div className="absolute inset-[3px] rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300" />
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-white font-semibold text-base tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="text-white/40 text-sm">—</span>
                  <span className="text-primary/80 text-sm font-medium">
                    {exp.company}
                  </span>
                </div>
                {exp.period && (
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase">
                    {exp.period}
                  </p>
                )}
                <p className="text-white/60 text-sm leading-relaxed">
                  {exp.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(WorkExperience);
