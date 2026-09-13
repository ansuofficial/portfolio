import { memo } from "react";
import {
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineAcademicCap,
  HiOutlineCog6Tooth,
  HiOutlineUserGroup,
} from "react-icons/hi2";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    title: "Software Consultancy",
    description: "Architecture and stack guidance.",
    icon: HiOutlineCpuChip,
  },
  {
    title: "One-on-One Private Classes",
    description: "Personalized coding lessons.",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "API Integration",
    description: "Reliable API and payment connections.",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Software Development & Design",
    description: "Clean, production-ready web apps.",
    icon: HiOutlineCodeBracket,
  },
  {
    title: "Technical Mentorship & Code Review",
    description: "Code reviews and team mentorship.",
    icon: HiOutlineUserGroup,
  },
];

interface ServicesProps {
  styles?: string;
}

function Services({ styles = "" }: ServicesProps) {
  return (
    <div
      className={`glass rounded-xl p-6 lg:p-8 space-y-5 flex flex-col h-full ${styles}`}
      role="region"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
      >
        My Services
      </h2>
      <ol className="space-y-4 flex-1">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className="flex items-start gap-3 group transition-all duration-200 hover:translate-x-1"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="block text-white/85 font-medium text-sm tracking-wide">
                  {service.title}
                </span>
                <p className="text-white/45 text-xs leading-snug line-clamp-1">
                  {service.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default memo(Services);
