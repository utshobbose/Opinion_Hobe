import type { Config } from "tailwindcss";
const twAnimate = require("tw-animate-css");

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [twAnimate], 
  
};

export default config;
