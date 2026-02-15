import { memo } from "react";
import { SiTypescript, SiJavascript, SiReact, SiRemix } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface TechnologiesProps {
  styles?: string;
}

interface TechItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
}

const technologies: TechItem[] = [
  { icon: SiTypescript, name: "TypeScript", color: "text-[#007acc]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#f0db4f]" },
  { icon: SiReact, name: "React", color: "text-[#61DBFB]" },
  { icon: RiNextjsFill, name: "Next.js", color: "text-white" },
  { icon: SiRemix, name: "Remix", color: "text-white" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-[#38bdf8]" },
];

function Technologies({ styles = "" }: TechnologiesProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 space-y-6 flex flex-col h-full ${styles}`}
      role="region"
      aria-labelledby="skills-heading"
    >
      <h1
        id="skills-heading"
        className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
      >
        Core Technologies
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-3 flex-1">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <li
              key={tech.name}
              className="flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1"
            >
              <Icon className="w-6 h-6 text-white/80 flex-shrink-0" />
              <span
                className={`${tech.color} font-semibold tracking-wide text-sm uppercase`}
              >
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Technologies);
