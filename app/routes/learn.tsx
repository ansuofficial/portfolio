import type { MetaFunction } from "@remix-run/node";
import { memo } from "react";
import { motion } from "motion/react";
import { HiOutlinePencilSquare, HiOutlineBookOpen } from "react-icons/hi2";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn | Ansu Badjie" },
    {
      name: "description",
      content:
        "Articles and insights by Ansumana Badjie — Software Engineer. Practical engineering knowledge on architecture, performance, integrations, and shipping production software.",
    },
  ];
};

function Learn() {
  return (
    <main className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <motion.div
          className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Icon */}
          <div className="relative">
            <motion.div
              className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 62, 0, 0)",
                  "0 0 0 12px rgba(255, 62, 0, 0.08)",
                  "0 0 0 0 rgba(255, 62, 0, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiOutlinePencilSquare className="w-9 h-9 text-primary" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Coming Soon
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              I'm writing about software architecture, performance engineering,
              API integrations, and lessons from shipping production software.
            </p>
          </div>

          {/* Topics Preview */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-md">
            {[
              "Architecture",
              "Performance",
              "API Design",
              "Production Lessons",
              "TypeScript",
              "System Design",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full glass text-white/60 text-xs font-semibold tracking-wide"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://x.com/ansucoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/15 hover:border-primary/30 transition-all duration-200"
            >
              <HiOutlineBookOpen className="w-4 h-4" />
              Follow for updates
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default memo(Learn);
