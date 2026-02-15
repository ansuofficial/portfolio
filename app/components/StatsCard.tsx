import { memo } from "react";

interface StatsCardProps {
  styles?: string;
}

interface StatItem {
  label: string;
  value: string | number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: "Years Experience", value: "3+", suffix: "" },
  { label: "Projects Completed", value: "20+", suffix: "" },
  { label: "Students Mentored", value: "200+", suffix: "" },
];

function StatsCard({ styles = "" }: StatsCardProps) {
  return (
    <div
      className={`glass-strong rounded-2xl p-6 space-y-6 flex flex-col h-full ${styles}`}
      role="region"
      aria-label="Professional Statistics"
    >
      <h2 className="text-white text-lg font-semibold tracking-tight">
        Impact Metrics
      </h2>
      <div className="space-y-4 flex-1">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col space-y-1 group"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white tabular-nums">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-sm text-white/60">{stat.suffix}</span>
              )}
            </div>
            <span className="text-sm text-white/70 font-medium tracking-wide">
              {stat.label}
            </span>
            <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mt-2" />
          </div>
        ))}
      </div>
      <div className="pt-2 mt-auto">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-medium">Available for Projects</span>
        </div>
      </div>
    </div>
  );
}

export default memo(StatsCard);

