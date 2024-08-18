import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Education from "~/components/Education";
import FancyImage from "~/components/FancyImage";
import NavBar from "~/components/NavBar";
import Profile from "~/components/Profile";
import RandomQuote from "~/components/RandomQuote";
import Role from "~/components/Role";
import Technologies from "~/components/Technologies";
import { json, useLoaderData } from "@remix-run/react";
import data from "~/utils/data.json"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader =  () => {
  const quote = data;
  const randomIndex = Math.floor(Math.random() * data.length);
  const message = quote[randomIndex];
  return json(message);
};

export default function Index() {
  const quote = useLoaderData();
  return (
    <main
      className={`dark:bg-dark bg-light bg-cover bg-center bg-no-repeat min-h-screen max-h-[200vh] h-[174vh] md:h-[130vh] xl:h-[100vh] dark:bg-blend-overlay dark:bg-hoverShadow/80 bg-blend-overlay bg-white/70  absolute left-0 right-0 overflow-hidden`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />

        <div className="space-y-4">
          <div className="md:hidden space-y-4">
            <Profile styles={"max-h-[18rem] h-dvh"} />
            <About styles={"py-4"} />
            <Role styles={"max-h-[7rem] h-dvh"} />
            <Technologies styles={""} />
            <RandomQuote styles={""} quote={quote} />
            <Education styles={""} />
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
            <Education styles={"h-auto col-span-2"} />
          </div>
        </div>
      </div>
    </main>
  );
}
