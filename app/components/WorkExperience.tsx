import { memo } from "react";

interface WorkExperienceProps {
  styles?: string;
}

interface Experience {
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Lead Frontend Engineer",
    company: "Jassehcodecamp",
    description:
      "Led frontend delivery for production web apps—owning UI architecture, performance, and release quality. Partnered with backend engineers and stakeholders to ship scalable features, integrate real-world APIs, and keep the product fast as it grew.",
  },
  {
    title: "Instructor",
    company: "JassehCodeCamp",
    description:
      "Designed hands-on curricula and mentored engineers through practical projects. Focused on fundamentals that translate to production work: debugging, clean architecture, accessibility, and maintainable React/TypeScript codebases.",
  },
  {
    title: "Intern",
    company: "Gomindz",
    description:
      "Contributed to shipped features in a team environment—learning delivery workflows, code review discipline, and how to build reliable UI against changing requirements.",
  },
];

function WorkExperience({ styles = "" }: WorkExperienceProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 lg:p-8 space-y-6 flex flex-col h-full ${styles}`}
      role="region"
      aria-labelledby="experience-heading"
    >
      <h1
        id="experience-heading"
        className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
      >
        Professional Experience
      </h1>
      <div className="space-y-6 flex-1">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="space-y-2 pb-6 border-b border-white/10 last:border-0 last:pb-0"
          >
            <h2 className="text-white font-semibold text-lg tracking-tight">
              {exp.title}
              <span className="text-white/60 font-normal"> — {exp.company}</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(WorkExperience);
