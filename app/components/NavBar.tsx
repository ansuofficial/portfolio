import { NavLink } from "@remix-run/react";
import { json, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/getusers");
  const result = await response.json();

  return json(result);
};

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //   name: "Blog",
  //   href: "/blog",
  // },
  // {
  //   name: "Resources",
  //   href: "/resources",
  // },
  {
    name: "Contact",
    href: "/contact",
  },
];
function NavBar() {
  return (
    <div className="flex justify-center items-center mx-auto gap-x-2 sm:gap-x-6 bg-transparent/50 sm:w-7/12 w-[22rem] lg:w-[30rem] px-4 lg:py-4 py-2 rounded-lg mt-6 sm:mt-12 fixed left-0 right-0 z-10 backdrop-blur-sm">
      {navLinks.map((navlink) => (
        <NavLink
          to={navlink.href}
          className={({ isActive }) =>
            isActive
              ? `text-primary sm:text-sm font-bold p-2`
              : `text-white text-sm font-bold duration-200 p-2`
          }
        >
          {navlink.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
