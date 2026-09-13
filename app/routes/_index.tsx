import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import ImpactMetrics from "~/components/ImpactMetrics";
import AIInquiry from "~/components/AIInquiry";
import Services from "~/components/Services";
import WorkExperience from "~/components/WorkExperience";
import { motion } from "motion/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ansu Badjie | Software Engineer" },
    {
      name: "description",
      content:
        "Ansumana Badjie — Software Engineer building production-ready applications that solve real business problems. Specializing in scalable architecture, API integrations, and high-performance web platforms.",
    },
  ];
};

export default function Index() {
  return (
    <main className="mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 mb-12">
        {/* Row 1: About Me + Impact Metrics */}
        {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <About />
          </motion.div>
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <ImpactMetrics />
          </motion.div>
        </div> */}

        {/* Row 2: AI Inquiry Block (full width) */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <AIInquiry />
        </motion.div>

        {/* Row 3: Services + Professional Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Services />
          </motion.div>
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <WorkExperience />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
