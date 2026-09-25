import { memo } from "react";

interface ImpactMetricsProps {
  styles?: string;
}

interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { label: "Years Building Software", value: "3+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Engineers Mentored", value: "200+" },
  { label: "Clients Served", value: "10+" },
];

function ImpactMetrics({ styles = "" }: ImpactMetricsProps) {
  return (
    <div
      className={`glass-strong rounded-xl p-6 lg:p-8 space-y-5 flex flex-col h-full ${styles}`}
      role="region"
      aria-label="Impact Metrics"
    >
      <h2
        className="text-lg font-semibold tracking-tight"
        style={{ color: "var(--text)" }}
      >
        Impact
      </h2>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col space-y-1 group"
          >
            <span
              className="text-3xl lg:text-4xl font-bold tabular-nums"
              style={{ color: "var(--text)" }}
            >
              {stat.value}
            </span>
            <span
              className="text-xs font-medium tracking-wide leading-tight"
              style={{ color: "var(--text-subtle)" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <div className="pt-2 mt-auto">
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-medium">Available for Projects</span>
        </div>
      </div>
    </div>
  );
}

export default memo(ImpactMetrics);
