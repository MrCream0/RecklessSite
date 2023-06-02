/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#aaa6c3",
        tertiary: "#202020",
        "black-100": "#161616",
        "black-200": "#000000",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #191919",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};