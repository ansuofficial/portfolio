import { memo } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Realistic Volumetric Diagonal Light Beam Effect from Top Left (Layered at z-10 over content/cards) */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-[880px] max-h-screen z-10 overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-0 w-[1280px] h-[880px] transition-all duration-700 ease-out"
          viewBox="0 0 1280 880"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* ── Dark Theme Gradients (Emanating from Top-Left ~ 50, 22 - Soft & Subtle) ── */}
            <linearGradient id="dark-beam-broad" x1="50" y1="22" x2="1100" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.10" />
              <stop offset="25%" stopColor="#10a882" stopOpacity="0.04" />
              <stop offset="60%" stopColor="#10a882" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="dark-beam-core" x1="50" y1="22" x2="1035" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.16" />
              <stop offset="18%" stopColor="#2dd4bf" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#10a882" stopOpacity="0.025" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="dark-beam-ray1" x1="50" y1="22" x2="1250" y2="715" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.10" />
              <stop offset="30%" stopColor="#10a882" stopOpacity="0.035" />
              <stop offset="70%" stopColor="#10a882" stopOpacity="0.005" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="dark-beam-ray2" x1="50" y1="22" x2="770" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.08" />
              <stop offset="35%" stopColor="#10a882" stopOpacity="0.03" />
              <stop offset="75%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="dark-source-glow" cx="50" cy="22" r="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.18" />
              <stop offset="25%" stopColor="#10a882" stopOpacity="0.06" />
              <stop offset="65%" stopColor="#10a882" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </radialGradient>

            {/* ── Light Theme Gradients (Crisp Primary Emerald/Teal on Cream, Emanating from Top-Left) ── */}
            <linearGradient id="light-beam-broad" x1="50" y1="22" x2="1100" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.12" />
              <stop offset="25%" stopColor="#10a882" stopOpacity="0.05" />
              <stop offset="60%" stopColor="#10a882" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="light-beam-core" x1="50" y1="22" x2="1035" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.18" />
              <stop offset="20%" stopColor="#14b8a6" stopOpacity="0.09" />
              <stop offset="55%" stopColor="#10a882" stopOpacity="0.025" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="light-beam-ray1" x1="50" y1="22" x2="1250" y2="715" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.14" />
              <stop offset="35%" stopColor="#10a882" stopOpacity="0.05" />
              <stop offset="70%" stopColor="#10a882" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="light-beam-ray2" x1="50" y1="22" x2="770" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.12" />
              <stop offset="35%" stopColor="#10a882" stopOpacity="0.04" />
              <stop offset="75%" stopColor="#10a882" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="light-source-glow" cx="50" cy="22" r="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10a882" stopOpacity="0.22" />
              <stop offset="25%" stopColor="#14b8a6" stopOpacity="0.08" />
              <stop offset="65%" stopColor="#10a882" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#10a882" stopOpacity="0" />
            </radialGradient>

            {/* ── Volumetric Light Dispersion Blur Filters ── */}
            <filter id="beam-blur-heavy" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="38" />
            </filter>
            <filter id="beam-blur-medium" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
            <filter id="beam-blur-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>

          {/* Ray 1: Wide Atmospheric Wash (Broadest cone spreading down-right) */}
          <polygon
            points="50,16 85,28 1280,740 660,880"
            fill={isDark ? "url(#dark-beam-broad)" : "url(#light-beam-broad)"}
            filter="url(#beam-blur-heavy)"
          />

          {/* Ray 2: Intense Core Light Shaft */}
          <polygon
            points="50,19 70,28 1050,880 780,880"
            fill={isDark ? "url(#dark-beam-core)" : "url(#light-beam-core)"}
            filter="url(#beam-blur-medium)"
          />

          {/* Ray 3: Secondary Upper Light Streak */}
          <polygon
            points="50,22 60,26 1280,750 1100,680"
            fill={isDark ? "url(#dark-beam-ray1)" : "url(#light-beam-ray1)"}
            filter="url(#beam-blur-soft)"
          />

          {/* Ray 4: Secondary Lower Light Streak */}
          <polygon
            points="50,24 62,30 850,880 690,880"
            fill={isDark ? "url(#dark-beam-ray2)" : "url(#light-beam-ray2)"}
            filter="url(#beam-blur-soft)"
          />

          {/* Source Bloom / Halo directly over the light source */}
          <circle
            cx="50"
            cy="22"
            r="260"
            fill={isDark ? "url(#dark-source-glow)" : "url(#light-source-glow)"}
            filter="url(#beam-blur-medium)"
          />
        </svg>
      </div>

      {/* Theme Toggle Button - Fixed at top left light source, clean & minimal (no pill, no hover) */}
      <button
        onClick={toggleTheme}
        className="fixed top-3.5 left-6 sm:left-10 z-50 p-1 flex items-center justify-center focus:outline-none cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        type="button"
        id="theme-toggle"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-center"
            >
              <Sun className="w-[18px] h-[18px] text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-center"
            >
              <Moon className="w-[18px] h-[18px] text-[var(--text)] drop-shadow-[0_0_6px_rgba(16,168,130,0.3)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}

export default memo(ThemeToggle);
