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
    [location.pathname],
  );

  return (
    <nav
      className="fixed top-11 left-0 right-0 z-40 px-4 sm:px-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-lg mx-auto">
        {/* Desktop Navigation - Floating Capsule */}
        <div
          className="hidden md:flex items-center justify-center gap-x-0.5 backdrop-blur-2xl rounded-full px-3 py-2 shadow-lg"
          style={{
            backgroundColor: "var(--nav-bg)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "var(--glass-border)",
            boxShadow: `0 4px 12px var(--nav-shadow)`,
          }}
        >
          {navLinks.map((navlink) =>
            navlink.isHash ? (
              <NavLink
                key={navlink.href}
                to={navlink.href}
                onClick={(e) => handleHashClick(e, navlink.href)}
                className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200"
                style={{
                  color: "var(--nav-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--nav-text-hover)";
                  e.currentTarget.style.backgroundColor = "var(--nav-item-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--nav-text)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {navlink.name}
              </NavLink>
            ) : (
              <NavLink
                key={navlink.href}
                to={navlink.href}
                className={({ isActive }) =>
                  `text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200 ${
                    isActive ? "text-primary" : ""
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? {}
                    : { color: "var(--nav-text)" }
                }
                onMouseEnter={(e) => {
                  const isActive = e.currentTarget.classList.contains("text-primary");
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--nav-text-hover)";
                    e.currentTarget.style.backgroundColor = "var(--nav-item-hover-bg)";
                  }
                }}
                onMouseLeave={(e) => {
                  const isActive = e.currentTarget.classList.contains("text-primary");
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--nav-text)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {navlink.name}
              </NavLink>
            ),
          )}
        </div>

        {/* Mobile Menu Button - Floating Capsule */}
        <div className="md:hidden flex justify-end">
          <div
            className="backdrop-blur-2xl rounded-full px-3 py-1.5 shadow-lg"
            style={{
              backgroundColor: "var(--nav-bg)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--glass-border)",
              boxShadow: `0 4px 12px var(--nav-shadow)`,
            }}
          >
            <button
              className="p-0.5 rounded-full transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.backgroundColor = "var(--nav-item-hover-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-2 backdrop-blur-2xl rounded-xl px-3 py-3 shadow-lg"
            style={{
              backgroundColor: "var(--nav-bg)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--glass-border)",
              boxShadow: `0 4px 12px var(--nav-shadow)`,
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((navlink) =>
                navlink.isHash ? (
                  <NavLink
                    key={navlink.href}
                    to={navlink.href}
                    onClick={(e) => handleHashClick(e, navlink.href)}
                    className="text-xs font-medium px-2.5 py-2 rounded-md transition-all duration-200"
                    style={{ color: "var(--nav-text)" }}
                  >
                    {navlink.name}
                  </NavLink>
                ) : (
                  <NavLink
                    key={navlink.href}
                    to={navlink.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xs font-medium px-2.5 py-2 rounded-md transition-all duration-200 ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                    style={({ isActive }) =>
                      isActive
                        ? {}
                        : { color: "var(--nav-text)" }
                    }
                  >
                    {navlink.name}
                  </NavLink>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(NavBar);
