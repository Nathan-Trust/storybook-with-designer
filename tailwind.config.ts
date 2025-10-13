import type { Config } from "tailwindcss";
const tailwindVariables = require("./tailwind-variables.js");

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
      borderRadius: {
        ...tailwindVariables.borderRadius,
      },
      boxShadow: {
        ...tailwindVariables.boxShadow,
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
