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
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    title: "Software Consultancy",
    icon: HiOutlineCpuChip,
  },
  {
    title: "One-on-One Private Classes",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "API Integration",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Software Development & Design",
    icon: HiOutlineCodeBracket,
  },
  {
    title: "Technical Mentorship & Code Review",
    icon: HiOutlineUserGroup,
  },
];

interface ServicesProps {
  styles?: string;
}

function Services({ styles = "" }: ServicesProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 lg:p-8 space-y-5 flex flex-col h-full ${styles}`}
      role="region"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
      >
        My Services
      </h2>
      <ol className="space-y-3 flex-1">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className="flex items-center gap-3 group transition-all duration-200 hover:translate-x-1"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-white/85 font-medium text-sm tracking-wide">
                {service.title}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default memo(Services);
