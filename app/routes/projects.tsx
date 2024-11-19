import React from "react";
import NavBar from "~/components/NavBar";

const pro = [
  {
    title:
      "National Food Security processing and Marketing Corporation (NFSPMC)",
    desc: "The Gambia National Food Security processing and Marketing Corporation is a full stack and responsive modern website with over 95% Search Engine Optimization (SEO), 90% Accessibility and 80% Performance",
    href: "/",
    thumbnail: "/project-1.png",
    stacks: [
      { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]" },
      { name: "Google translate", bg: "bg-yellow-700" },
    ],
  },
  {
    title: "SumaHalis",
    desc: "SumaHalis is a user-friendly web application that allow user to do all types of transaction like transfering fictional cash from one account to another, user can also withdraw and event take loans. It's features include live analytics with real charts and also keep all records of you transaction.",
    href: "/",
    thumbnail: "/projectc-2.png",
    stacks: [
      { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]" },
      { name: "Google translate", bg: "bg-yellow-700" },
    ],
  },
  {
    title: "Space Webite",
    desc: "This project is an interactive and responsive space website with complex routing / multi-page, it has great UI/UX and a excellent SEO, Performance and Accessibility",
    href: "/",
    thumbnail: "/project-3.png",
    stacks: [
      { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]" },
      { name: "Google translate", bg: "bg-yellow-700" },
    ],
  },
  {
    title: "Audiophile",
    desc: "Audiophile an interactive E-Commerce website that allows users to add products to cart or remove a product from cart. Users can also checkout",
    href: "/",
    thumbnail: "/project-4.png",
    stacks: [
      { name: "Nextjs", bg: "bg-[#000000]", text: "text-white" },
      { name: "Tailwind", bg: "bg-[#38bdf8]" },
      { name: "Google translate", bg: "bg-yellow-700" },
    ],
  },
];

function projects() {
  return (
    <main
      className={`bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />
        {pro.map((pro) => {
          return (
            <div className="flex flex-col justify-between">
              <div className="md:flex gap-x-6 space-y-2">
                <img
                  src={pro.thumbnail}
                  alt=""
                  className="max-w-xl w-full md:w-[400px] lg:w-[500px] rounded-lg"
                />
                <div className="flex gap-y-2 flex-col justify-between">
                  <div className="bg-green-100/55 backdrop-blur px-4 py-2 rounded-lg space-y-2">
                    <h3 className="text-gray-950 uppercase font-bold tracking-wide ">
                      {pro.title}
                    </h3>
                    <p className="text-gray-950 text-sm leading-6">
                      {pro.desc}
                    </p>
                  </div>

                  <div className="bg-green-100/55 backdrop-blur px-4 py-2 rounded-lg">
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
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default projects;
