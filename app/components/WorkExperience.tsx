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
    title: "Lead Frontend Developer",
    company: "Jassehcodecamp",
    description:
      "Crafting high-performing, visually engaging web experiences using modern technologies. Collaborating closely with backend engineers and stakeholders to build innovative, scalable solutions that deliver real impact.",
  },
  {
    title: "Instructor",
    company: "JassehCodeCamp",
    description:
      "Empowering the next generation of developers through hands-on instruction. Designing and delivering practical coding sessions, mentoring emerging engineers, and shaping their journey into professional software development.",
  },
  {
    title: "Intern",
    company: "Gomindz",
    description:
      "Gained hands-on experience working with a dynamic team, contributing to innovative projects and honing skills in a professional setting.",
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
