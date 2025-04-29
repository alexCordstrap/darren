/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Book", ...defaultTheme.fontFamily.sans],
        book: ["Avenir Book", "sans-serif"],
        heavy: ["Avenir Heavy", "sans-serif"],
        light: ["Avenir Light", "sans-serif"],
        lightOblique: ["Avenir Light Oblique", "sans-serif"],
      },
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
      colors: {
        brandRed: 'rgb(194, 11, 25)',
      },
    },
  },
  plugins: [],
};
