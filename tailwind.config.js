/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#faf4f4",
        darkgray: "#9f9f9f",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
