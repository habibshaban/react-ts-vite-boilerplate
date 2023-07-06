const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#ffffff",
        "primary-dark": "#ff0000",
        "primary-bg-light": "#ffffff",
        "primary-bg-dark": "#0B2447",
      },
      screens: {},
      transitionProperty: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
  // presets: [require("../../tailwind-preset.js")],
};
