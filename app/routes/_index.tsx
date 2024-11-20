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
import {motion } from "motion/react";
import { spring } from "motion";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
    <main
      className={`bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <motion.div initial={{ y: -500 }} animate={{ y: 0, transition:{ type: "spring", stiffness: 200 }}}>
           <NavBar />
        </motion.div>

        <div className="space-y-4">
          <div className="md:hidden space-y-4">
            <Profile styles={"max-h-[18rem] h-dvh"} />
            <About styles={"py-4"} />
            <Role styles={"max-h-[7rem] h-dvh"} />
            <Technologies styles={""} />
            <RandomQuote styles={""} quote={quote} />
            <WorkExperience styles={""} />
          </div>
          <div className="hidden md:grid grid-cols-3 gap-x-4">
            <About styles={"max-h-[10rem] col-span-2"} />
            <Profile styles={"max-h-[18rem] h-dvh col-span-1 lg:hidden"} />
            <FancyImage
              styles={" max-h-[18rem] h-dvh col-span-1 hidden lg:grid"}
            />
          </div>

          <div className="hidden md:grid grid-cols-3 gap-x-4">
            <div className="col-span-2 grid grid-cols-2 gap-x-4 -mt-[8rem]">
              <Role styles={"max-h-[7rem] h-dvh lg:col-span-1 col-span-2"} />
              <Profile styles={"max-h-[15.41rem] h-dvh hidden lg:grid"} />
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
            <WorkExperience styles={"h-auto col-span-2"} />
          </div>
        </div>
      </div>
    </main>
  );
}
