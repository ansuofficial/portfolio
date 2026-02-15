import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import WorkExperience from "~/components/WorkExperience";
import StatsCard from "~/components/StatsCard";
import NavBar from "~/components/NavBar";
import Profile from "~/components/Profile";
import RandomQuote from "~/components/RandomQuote";
import Role from "~/components/Role";
import Technologies from "~/components/Technologies";
import { json, useLoaderData } from "@remix-run/react";
import data from "~/utils/data.json";
import { motion } from "motion/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ansu Badjie | Frontend Developer & Digital Strategist" },
    {
      name: "description",
      content:
        "Ansumana Badjie - Frontend Engineer and Digital Strategist. Crafting elegant, high-performance web experiences with TypeScript, React, and modern UI technologies.",
    },
  ];
};

export const loader = () => {
  const quotes = data as Array<{ message: string }>;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const message = quotes[randomIndex];
  return json(message);
};

export default function Index() {
  const quote = useLoaderData<typeof loader>();
  return (
    <main className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 mb-12">
        <div className="space-y-6">
          {/* Mobile view */}
          <div className="md:hidden space-y-6">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Profile styles="max-h-[20rem]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <About styles="py-4" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <Role styles="max-h-[8rem]" />
            </motion.div>
            <Technologies styles="" />
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <RandomQuote styles="" quote={quote} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <WorkExperience styles="" />
            </motion.div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <About />
            </motion.div>
            <Profile styles="col-span-1 lg:hidden" />
            <div className="col-span-1 hidden lg:block">
              <StatsCard styles="h-full" />
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6">
            <div className="col-span-2 grid grid-cols-2 gap-6 -mt-[6rem]">
              <Role styles="max-h-[8rem] lg:col-span-1 col-span-2" />
              <motion.div
                className="max-h-[16rem] hidden lg:grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <Profile styles="max-h-[16rem]" />
              </motion.div>
            </div>
            <RandomQuote
              styles="max-h-[8rem] lg:col-span-1 col-span-3 lg:ml-0 ml-auto lg:w-full w-[66%]"
              quote={quote}
            />
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6">
            <div className="col-span-1 -mt-[7rem]">
              <Technologies styles="h-full" />
            </div>
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <WorkExperience styles="h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
