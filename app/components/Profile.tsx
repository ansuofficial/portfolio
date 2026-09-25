import { memo } from "react";

interface ProfileProps {
  styles?: string;
}

function Profile({ styles = "" }: ProfileProps) {
  return (
    <div
      className={`glass rounded-xl p-6 flex flex-col justify-center items-center space-y-4 ${styles}`}
      role="region"
      aria-label="Profile Information"
    >
      <div className="relative">
        <div
          className="h-32 w-32 md:h-40 md:w-40 relative rounded-full overflow-hidden ring-4"
          style={{ "--tw-ring-color": "var(--ring)" } as React.CSSProperties}
        >
          <img
            className="object-cover w-full h-full object-[center_top] scale-105"
            src="/ansu-dp-transparent.png"
            alt="Ansu Badjie Profile Photo"
            loading="lazy"
            width={160}
            height={160}
          />
        </div>
        <div
          className="absolute -bottom-1 -right-1 h-6 w-6 bg-primary rounded-full border-2"
          style={{ borderColor: "var(--bg)" }}
        />
      </div>
      <h1
        className="text-xl md:text-2xl font-display font-bold text-center tracking-tight"
        style={{ color: "var(--text)" }}
      >
        Ansumana Badjie
      </h1>
    </div>
  );
}

export default memo(Profile);
