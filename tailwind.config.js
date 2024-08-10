/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  darkMode: 'class', // Enable dark mode via a CSS class
  plugins: [],
};
