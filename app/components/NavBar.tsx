import { NavLink } from "@remix-run/react";
import Toggler from "./Toggler";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
function NavBar() {
  return (
    <div className="flex justify-center items-center mx-auto gap-x-2 sm:gap-x-6 bg-transparent/50 sm:w-7/12 w-[18rem] lg:w-[30rem] px-4 lg:py-4 py-2 rounded-lg mt-6 sm:mt-12">
      {navLinks.map((navlink) => (
        <NavLink
          to={navlink.href}
          className={({ isActive }) =>
            isActive
              ? `dark:text-primary text-sencondary text-sm font-bold p-2`
              : `text-white text-sm font-bold duration-200 p-2`
          }
        >
          {navlink.name}
        </NavLink>
      ))}
      {/* <Toggler /> */}
    </div>
  );
}

export default NavBar;
