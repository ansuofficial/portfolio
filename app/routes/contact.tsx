import React from "react";
import NavBar from "~/components/NavBar";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import LocationMap from "~/components/LocationMap";

function contact() {
  return (
    <main
      className={`dark:bg-dark bg-light bg-cover bg-center bg-no-repeat min-h-screen dark:bg-blend-overlay dark:bg-hoverShadow/80 bg-blend-overlay bg-white/80 absolute left-0 right-0`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />
        <div className="flex justify-center md:gap-x-12 sm:gap-x-6 gap-x-4 ">
          <div className="flex md:gap-x-6">
            <div className="text-center flex flex-col justify-between py-6">
              <div>
                <BiPhone className="md:w-5 md:h-5 w-3 h-3 dark:text-white text-black mx-auto" />
                <span className="uppercase text-sm font-bold dark:text-white text-black">
                  Phone
                </span>
              </div>
              <p className="tracking-wide dark:text-white text-black md:text-sm text-xs">
                +220 3338111
              </p>
            </div>
            <div className="h-28 w-[1px]  bg-gradient-to-t from-transparent dark:to-primary to-sencondary"></div>
          </div>
          <div className="flex md:gap-x-6">
            <div className="text-center flex flex-col justify-between py-6">
              <div>
                <MdEmail className="md:w-5 md:h-5 w-3 h-3 dark:text-white text-black mx-auto" />
                <span className="uppercase text-sm font-bold dark:text-white text-black">
                  Email
                </span>
              </div>
              <p className="tracking-wide dark:text-white text-black md:text-sm text-xs">
                ansucoder@gmail.com
              </p>
            </div>
            <div className="h-28 w-[1px]  bg-gradient-to-t from-transparent dark:to-primary to-sencondary"></div>
          </div>
          <div className="flex md:gap-x-6">
            <div className="text-center flex flex-col justify-between py-6">
              <div>
                <BiLocationPlus className="md:w-5 md:h-5 w-3 h-3 dark:text-white text-black mx-auto" />
                <span className="uppercase text-sm font-bold dark:text-white text-black">
                  Address
                </span>
              </div>
              <p className="tracking-wide dark:text-white text-black md:text-sm text-xs">
                Serrekunda, The Gambia
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-x-12 space-y-2">
          <form action="" className="space-y-2 mb-6 lg:mb-0">
            <div className="mb-2">
              <h4 className="dark:text-white text-black tracking-wide uppercase">
                I'd love to chat!
              </h4>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="px-4 p-2 w-full rounded-lg dark:bg-hoverShadow bg-base dark:text-white text-black ring-1 dark:ring-0 ring-sencondary outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="px-4 p-2 w-full rounded-lg dark:bg-hoverShadow bg-base dark:text-white text-black ring-1 dark:ring-0 ring-sencondary outline-none"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="px-4 p-2 w-full rounded-lg dark:bg-hoverShadow bg-base dark:text-white text-black ring-1 dark:ring-0 ring-sencondary outline-none"
              />
            </div>
            <div>
              <button className="dark:bg-primary bg-sencondary dark:text-white text-black md:text-sm text-xs uppercase font-bold tracking-wider p-4 rounded-lg">Send Message</button>
            </div>
          </form>
          <div className=" lg:w-6/12 p-4 rounded-lg space-y-4 dark:bg-hoverShadow bg-base ">
            <p className="lg:text-sm dark:text-white text-black">
              As a software developer, I'm always open to connecting with fellow
              professionals and discussing potential collaborations. Feel free
              to reach out via email or connect with me on social media to stay
              updated on my latest projects and insights.
            </p>
            <div className="space-y-2">
              <h4 className="dark:text-white text-black tracking-wide uppercase">
                Let's connect
              </h4>
              <div className="flex gap-x-4">
                <LiaLinkedin className="w-5 h-5 dark:text-white text-black" />
                <BsTwitter className="w-5 h-5 dark:text-white text-black" />
                <FaGithub className="w-5 h-5 dark:text-white text-black" />
              </div>
            </div>
            <p className="dark:text-white text-black tracking-wide uppercase text-xs md">
              I hope to hear from you soon
            </p>
          </div>
          {/* <h4 className="dark:text-white text-black tracking-wide uppercase">
              Let's connect
            </h4>
            <div className="flex gap-x-4">
              <div>
                <LiaLinkedin className="w-5 h-5 dark:text-white text-black mx-auto" />
                <span className="text-sm dark:text-white text-black">
                  Linkedin
                </span>
              </div>
              <div>
                <BsTwitter className="w-5 h-5 dark:text-white text-black mx-auto" />
                <span className="text-sm dark:text-white text-black">
                  Twitter
                </span>
              </div>
              <div>
                <FaGithub className="w-5 h-5 dark:text-white text-black mx-auto" />
                <span className="text-sm dark:text-white text-black">
                  Github
                </span>
              </div>
            </div> */}
        </div>
        <LocationMap />
        {/* <h1 className="text-white">Hello world</h1> */}
      </div>
    </main>
  );
}

export default contact;
