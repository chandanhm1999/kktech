/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "#FAF8F3",
      primary: {
        DEFAULT: "#c1deba",
        50: "#f6f9f4",
        100: "#e8f3e5",
        200: "#c1deba",
        300: "#acd2a3",
        400: "#7fb573",
        500: "#5c984f",
        600: "#487c3d",
        700: "#3c6233",
        800: "#324f2c",
        900: "#294225",
      },
      secondary: {
        DEFAULT: "#fbf3eb",
        50: "#fbf3eb",
        100: "#f8eadc",
        200: "#f0d3b8",
        300: "#e6b58b",
        400: "#db8e5c",
        500: "#d3723c",
        600: "#c55c31",
        700: "#a4472a",
        800: "#833a29",
        900: "#6a3224",
      },
      accent: {
        DEFAULT: "#d4cbc5",
        50: "#f9f8f7",
        100: "#f2f0ee",
        200: "#e8e3e0",
        300: "#d4cbc5",
        400: "#bfb2aa",
        500: "#a7978c",
        600: "#8f7e73",
        700: "#77685e",
        800: "#645850",
        900: "#564c46",
      },
      body: {
        DEFAULT: "#2c2c2c",
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#2c2c2c",
      },
      black: {
        DEFAULT: "#000000",
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
      },
    },

    fontFamily: {
      sans: ["Nunito Sans", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
