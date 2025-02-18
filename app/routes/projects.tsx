import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
import NavBar from "~/components/NavBar";
import { BsGraphUpArrow } from "react-icons/bs";
import { text } from "motion/react-client";

const pro = [
  {
    title: "Brikama Area Council",
    desc: "Brikama Area Council is a fullstack and responsive modern website with over 95% Search Engine Optimization (SEO), 90% Accessibility and 80% Performance",
    href: "https://www.brikama.gm/",
    thumbnail: "/bac-thumbnail.png",
    stacks: [
      { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]", text: "text-white"},
      { name: "Google translate", bg: "bg-[#FFD700]", text: "text-white" },
      { name: "Framer motion", bg: "bg-[#EF4444]", text: "text-white" },
    ],
  },
   {
    title:
      "National Food Security processing and Marketing Corporation (NFSPMC)",
    desc: "The Gambia National Food Security processing and Marketing Corporation is a full stack and responsive modern website with over 95% Search Engine Optimization (SEO), 90% Accessibility and 80% Performance",
    href: "https://www.nfsc.gm/",
    thumbnail: "/project-1.png",
    stacks: [
      { name: "Remix", bg: "bg-[#121212]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]", text: "text-white"},
      { name: "Framer motion", bg: "bg-[#EF4444]", text: "text-white" },

    ],
  },
  {
    title: "Wolurek",
    desc: "Wolurek is The Gambia’s top platform, trusted by individuals and the government. It simplifies daily tasks like sending packages, paying bills, and buying tickets with a seamless, modern, and high-performing design.",
    href: "https://wolurek.com/",
    thumbnail: "/wolurek.png",
    stacks: [
      { name: "AngularJS", bg: "bg-[#DD0031]", text: "text-white" }

    ],
  },

  // {
  //   title: "SumaHalis",
  //   desc: "SumaHalis is a user-friendly web application that allow user to do all types of transaction like transfering fictional cash from one account to another, user can also withdraw and event take loans. It's features include live analytics with real charts and also keep all records of you transaction.",
  //   href: "/",
  //   thumbnail: "/projectc-2.png",
  //   stacks: [
  //     { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
  //     { name: "Tailwind", bg: "bg-[#38bdf8]" },
  //     { name: "Google translate", bg: "bg-yellow-700" },
  //   ],
  // },
  {
    title: "Space Webite",
    desc: "This project is an interactive and responsive space website with complex routing / multi-page, it has great UI/UX and a excellent SEO, Performance and Accessibility",
    href: "https://spacewebsite-jcc.vercel.app/",
    thumbnail: "/space-website-thumbnail.png",
    stacks: [
      { name: "React", bg: "bg-[#61DAFB]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38BDF8]", text: "text-white" },
      { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
    ],
  },
  {
    title: "UIPool",
    desc: "UIPool allows developers to dive into high-quality UI solutions that enhances their projects and boost their workflow. Whether you're building from scratch or optimizing an existing app, UI Ocean provides the tools you need to create beautiful, responsive user interfaces with ease.",
    href: "https://uipool.vercel.app/",
    thumbnail: "/uipool-thumbnail.png",
    stacks: [
      { name: "React", bg: "bg-[#61DAFB]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]", text: "text-white"},
      { name: "React Router", bg: "bg-[#CA4245]", text: "text-white" },
    ],
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    {
      name: "Ansu's projects",
      content:
        "Ansumana Badjie, Ansu Gambia,Ansumana Badjie Gambian developer, JassehCodeCamp developer, Ansu's projects, Ansu Badjie gambian developer projects",
    },
  ];
};

function projects() {
  return (
    <main
      className={`bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />
        <div className="flex flex-col gap-y-12">
          {pro.map((pro) => {
            return (
              <div className="md:flex gap-x-6 space-y-2">
                <Link to={pro.href} target="_blank">
                  <img
                    src={pro.thumbnail}
                    alt=""
                    className="max-w-xl w-full md:w-[400px] lg:w-[500px] rounded-lg"
                  />
                </Link>
                <div className="flex gap-y-2 flex-col justify-between">
                  <Link to={pro.href} target="_blank">
                    <div className="bg-green-100/55 backdrop-blur px-4 py-2 rounded-lg space-y-2">
                      <h3 className="text-gray-950 uppercase font-bold tracking-wide ">
                        {pro.title}
                      </h3>
                      <p className="text-gray-950 text-sm leading-6">
                        {pro.desc}
                      </p>
                    </div>
                  </Link>

                  <div className="bg-green-100/55 ring-1 ring-green-100 backdrop-blur px-4 py-2 rounded-lg">
                    <h4 className="uppercase font-bold text-[0.6rem] px-2 text-gray-950 mb-2">
                      Stacks
                    </h4>
                    <div className="flex gap-x-4">
                      {pro.stacks.map((stack) => {
                        return (
                          <span
                            className={`text-gray-950 p-2 text-[0.6rem] font-bold uppercase rounded-md ${
                              stack.bg
                            } ${stack?.text && stack.text}`}
                          >
                            {stack.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="flex gap-4 items-center flex-wrap backdrop-blur text-white ring-1 rounded-md ring-primary p-4">
          Stay tuned 12+ projects are in progress
          <BsGraphUpArrow />
        </div> */}
      </div>
    </main>
  );
}

export default projects;
