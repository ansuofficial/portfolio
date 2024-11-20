import React from "react";
import NavBar from "~/components/NavBar";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function contact() {
  return (
    <main
      className={`bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed`}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />
        {/* STL */}
        <div className="flex sm:flex-row flex-col sm:gap-x-6  justify-center items-center mx-auto">
          <div className="flex">
            <div className="flex gap-x-6">
              <div className="text-center flex flex-col justify-between py-6">
                <div>
                  <BiPhone className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                  <span className="uppercase text-sm font-bold text-white">
                    Phone
                  </span>
                </div>
                <p className="tracking-wide text-white md:text-sm text-xs">
                  +220 3338111
                </p>
              </div>
              <div className="mx-4 h-28 w-[1px]  bg-gradient-to-t from-transparent to-primary"></div>
            </div>
            <div className="flex">
              <div className="text-center flex flex-col justify-between py-6 sm:px-4">
                <div>
                  <MdEmail className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                  <span className="uppercase text-sm font-bold text-white ">
                    Email
                  </span>
                </div>
                <p className="tracking-wide text-white md:text-sm text-xs">
                  ansucoder@gmail.com
                </p>
              </div>
              <div className="sm:mx-4 h-28 w-[1px] bg-gradient-to-t from-transparent to-primary hidden sm:grid"></div>
            </div>
          </div>
          <div className="space-y-6 flex flex-col items-center">
            <div className="text-center flex flex-col justify-between py-6">
              <div>
                <BiLocationPlus className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                <span className="uppercase text-sm font-bold text-white">
                  Address
                </span>
              </div>
              <p className="tracking-wide text-white md:text-sm text-xs">
                Serrekunda, The Gambia
              </p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-t from-transparent to-primary sm:hidden"></div>
          </div>
        </div>
        <div className="lg:flex lg:items-start gap-x-12 justify-between space-y-2">
          <form action="" className="space-y-6 mb-6 lg:mb-0 w-full">
            <div className="mb-2">
              <h4 className="text-white tracking-wide uppercase">
                I'd love to chat!
              </h4>
            </div>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-gray-950 ring-1 ring-green-100/25 outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-gray-950 ring-1 ring-green-100/25 outline-none"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-gray-950 ring-1 ring-green-100/25 outline-none"
              />
            </div>
            <div>
              <button className="bg-primary text-white md:text-sm text-xs uppercase font-bold tracking-wider p-4 rounded-lg">
                Send Message
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-y-6 items-end w-full">
            <div className="p-4 rounded-lg space-y-4 bg-green-100/70 backdrop-blur">
              <p className="lg:text-sm text-gray-950 w-full">
                As a software developer, I'm always open to connecting with
                fellow professionals and discussing potential collaborations.
                Feel free to reach out via email or connect with me on social
                media to stay updated on my latest projects and insights.
              </p>
            </div>
            <div className="p-4 space-y-6 bg-green-100/70 rounded-md w-full">
              <div className="space-y-2">
                <h4 className="text-gray-950 tracking-wide uppercase">
                  Let's connect
                </h4>
                <div className="flex gap-x-4">
                  <LiaLinkedin className="w-5 h-5 text-gray-950" />
                  <BsTwitter className="w-5 h-5 text-gray-950" />
                  <FaGithub className="w-5 h-5 text-gray-950" />
                </div>
              </div>
              <p className="text-gray-950 tracking-wide uppercase text-xs md">
                I hope to hear from you soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default contact;
