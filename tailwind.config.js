/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#073478",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
