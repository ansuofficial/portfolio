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
      backgroundImage: {
        dark: "url('/black-background.jpg')",
        light: "url('/white-background.jpg')",
      },
    },
  },
  plugins: [],
  // safelist: ["bg-[rgb(97, 219, 251)]"],
};
