import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import WorkExperience from "~/components/WorkExperience";
import FancyImage from "~/components/FancyImage";
import NavBar from "~/components/NavBar";
import Profile from "~/components/Profile";
import RandomQuote from "~/components/RandomQuote";
import Role from "~/components/Role";
import Technologies from "~/components/Technologies";
import { json, useLoaderData } from "@remix-run/react";
import data from "~/utils/data.json";
import { motion } from "motion/react";
import { animate, spring } from "motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Ansu" },
    {
      name: "Ansu's portfolio website",
      content:
        "Ansumana Badjie, Ansu Gambia,Ansumana Badjie Gambian developer, JassehCodeCamp developer",
    },
  ];
};

export const loader = () => {
  const quote = data;
  const randomIndex = Math.floor(Math.random() * data.length);
  const message = quote[randomIndex];
  return json(message);
};

export default function Index() {
  const quote = useLoaderData();
  return (
    <main className="md:mt-44 mt-32">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <div className="space-y-4">
          {/* Mobile view */}

          <div className="md:hidden space-y-4">
            <motion.div
              initial={{ x: -500 }}
              animate={{
                x: 0,
                transition: { type: "spring", delay: 0.5, stiffness: 100 },
              }}
            >
              <Profile styles={"max-h-[18rem] h-dvh"} />
            </motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{
                x: 0,
                transition: { type: "spring", delay: 1.5, stiffness: 100 },
              }}
            >
              <About styles={"py-4"} />
            </motion.div>
            <motion.div
              initial={{ x: -500 }}
              animate={{
                x: 0,
                transition: { type: "spring", delay: 2.5, stiffness: 100 },
              }}
            >
              <Role styles={"max-h-[7rem] h-dvh"} />
            </motion.div>
            <Technologies styles={""} />
            <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
              <RandomQuote styles={""} quote={quote} />
            </motion.div>
            <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
              <WorkExperience styles={""} />
            </motion.div>
          </div>

          {/* Mobile view end */}
          <div className="hidden md:grid grid-cols-3 gap-x-4">
            <motion.div
              className="max-h-[10rem] col-span-2"
              initial={{ x: -500, scale: 0 }}
              animate={{
                x: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 50 },
              }}
            >
              <About />
            </motion.div>
            {/* divz */}
            <Profile styles={"max-h-[18rem] h-dvh col-span-1 lg:hidden"} />
            <FancyImage
              styles={"max-h-[18rem] ax-h-[18rem] col-span-1 hidden lg:grid"}
            />
          </div>

          <div className="hidden md:grid grid-cols-3 gap-x-4">
            <div className="col-span-2 grid grid-cols-2 gap-x-4 -mt-[8rem]">
              <Role styles={"max-h-[7rem] h-dvh lg:col-span-1 col-span-2"} />
              <motion.div
                className="max-h-[15.41rem] h-dvh hidden lg:grid"
                initial={{ scale: 0.5 }}
                animate={{
                  scale: 1,
                  transition: {
                    delay: 1.5,
                    type: "spring",
                    stiffness: "50",
                    duration: 0.5,
                  },
                }}
              >
                <Profile styles={"max-h-[15.41rem]"} />
              </motion.div>
            </div>
            <RandomQuote
              styles={
                "max-h-[7.5rem] h-dvh lg:col-span-1 col-span-3 lg:ml-0 ml-auto lg:w-full w-[66%]"
              }
              quote={quote}
            />
          </div>

          <div className="hidden md:grid grid-cols-3 gap-x-4 ">
            <Technologies styles={"col-span-1 -mt-[8.5rem]"} />
            <motion.div
              className="col-span-2"
              initial={{ x: 500, scale: 0 }}
              animate={{
                x: 0,
                scale: 1,
                transition: { delay: 0.5, type: "spring", stiffness: 50 },
              }}
            >
              <WorkExperience styles={"h-auto"} />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
