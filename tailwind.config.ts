module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff3e00",
        sencondary: "#22c55e",
        base: "#f3f4f6",
        hoverShadow: "#0F0F0F",
      },
      //   dark: {
      //     primary: "#ff3e00",
      //     secondary: "#fff",
      //     overlay: "#000",
      //   },
      //   light: {
      //     primary: "#FC4100",
      //     secondary: "#fff",
      //     overlay: "#fff",
      //   },
      // },
      backgroundImage: {
        dark: "url('/black-background.jpg')",
        light: "url('/white-background.jpg')",
      },
    },
  },
  plugins: [],
  // safelist: [
  //   "bg-dark",
  //   "bg-light",
  //   "text-dark-primary",
  //   "text-light-primary",
  //   "text-dark-secondary",
  //   "text-light-secondary",
  //   "hover:text-dark-secondary",
  //   "hover:text-light-secondary",
  //   "bg-dark-overlay/80",
  //   "bg-light-overlay/80",
  //   "to-light-hoverShadow",
  //   "to-dark-hoverShadow",
  //   "bg-light-hoverShadow",
  //   "bg-dark-hoverShadow",
  //   "ring-light-hoverShadow",
  //   "ring-dark-hoverShadow",
  //   "decoration-dark-primary",
  //   "decoration-light-primary"
  // ],
};
