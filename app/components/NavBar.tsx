import { NavLink, useLocation } from "@remix-run/react";
import { memo, useState, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface NavLinkItem {
  name: string;
  href: string;
  isHash?: boolean;
}

const navLinks: NavLinkItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Impact",
    href: "/impact",
  },
  {
    name: "Learn",
    href: "/learn",
  },
  {
    name: "Get in Touch",
    href: "/#inquiry",
    isHash: true,
  },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleHashClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      const hash = href.split("#")[1];
      if (!hash) return;

      // If we're on the homepage, scroll to the element
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // If on another page, the NavLink will navigate to /#inquiry which will then scroll
      setIsMobileMenuOpen(false);
    },
    [location.pathname]
  );

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-2xl mx-auto">
        {/* Desktop Navigation - Floating Capsule */}
        <div className="hidden md:flex items-center justify-center gap-x-1 bg-white/3 backdrop-blur-2xl rounded-full px-6 py-3 border border-white/[0.07] shadow-lg shadow-black/20">
          {navLinks.map((navlink) =>
            navlink.isHash ? (
              <NavLink
                key={navlink.href}
                to={navlink.href}
                onClick={(e) => handleHashClick(e, navlink.href)}
                className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5"
              >
                {navlink.name}
              </NavLink>
            ) : (
              <NavLink
                key={navlink.href}
                to={navlink.href}
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {navlink.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Menu Button - Floating Capsule */}
        <div className="md:hidden flex justify-end">
          <div className="bg-white/3 backdrop-blur-2xl rounded-full px-4 py-3 border border-white/[0.07] shadow-lg shadow-black/20">
            <button
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white/3 backdrop-blur-2xl rounded-2xl px-4 py-4 border border-white/[0.07] shadow-lg shadow-black/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((navlink) =>
                navlink.isHash ? (
                  <NavLink
                    key={navlink.href}
                    to={navlink.href}
                    onClick={(e) => handleHashClick(e, navlink.href)}
                    className="text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5"
                  >
                    {navlink.name}
                  </NavLink>
                ) : (
                  <NavLink
                    key={navlink.href}
                    to={navlink.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {navlink.name}
                  </NavLink>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(NavBar);
