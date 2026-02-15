import { memo } from "react";

interface AboutProps {
  styles?: string;
}

function About({ styles = "" }: AboutProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 lg:p-8 space-y-4 ${styles}`}
      role="region"
      aria-labelledby="about-heading"
    >
      <h1
        id="about-heading"
        className="text-white text-2xl font-display font-bold tracking-tight"
      >
        Who the hell am I?
      </h1>
      <p className="text-white/80 text-base leading-relaxed tracking-wide text-balance">
      I'm Ansumana, a Software Engineer dedicated to creating elegant,
high-performance, and user-focused digital solutions across platforms. I combine
design precision with strong engineering principles, building scalable, secure,
and accessible software systems that deliver real-world impact. I'm driven by a simple goal: to craft intuitive digital experiences that
inspire trust, perform exceptionally, and endure over time.
      </p>
    </div>
  );
}

export default memo(About);

// Finance
// Opportunities page
