/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#073478",
        supergray: "#1E1E1E",
        gray: "#808080",
        seriy: "#FFFFFF",
        grayForm: "#0D0D0D1A",
        orange: "#FF3E3E",
        darkGray: "#0D0D0D4D",
        checkboxColor: "#CBCBCB",
        navColor: "#F6F6F6",
        lightgray: "#CBCBCB",
        lightblue: "#2F6AA366",
      },
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      sizing: {
        "1006x": "1006px",
        "116x": "116px",
        logoH: "118px",
        logoW: "326px",
        logoT: "373px",
        logoL: "635px",
        "1600x": "1600px",
        "467x": "467px",
        "1726x": "1726px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" }, // change the starting position to 100%
          "100%": { transform: "translateX(-100%)" }, // change the ending position to -100%
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
