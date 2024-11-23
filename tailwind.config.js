/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        slate: { 950: "#0b101d" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
