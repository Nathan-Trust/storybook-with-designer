import type { Config } from "tailwindcss";
const tailwindVariables = require("./configured-tailwind-variables.js");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ...tailwindVariables.colors,
      },
      boxShadow: {
        ...tailwindVariables.boxShadow,
      },
      spacing: {
        ...tailwindVariables.spacing,
      },
      borderRadius: {
        ...tailwindVariables.borderRadius,
      },
      fontSize: {
        ...tailwindVariables.fontSize,
      },
      lineHeight: {
        ...tailwindVariables.lineHeight,
      },
      borderWidth: {
        ...tailwindVariables.borderWidth,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
