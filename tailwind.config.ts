import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aquagreen: "#27BD80",
        spaceblue: "#001830",
        offwhite: "#F7F7F7",
        navyblue: "#002F67",
        white: "#FFFFFF",
        black: "#000000",
        green: "#38C28A",
        mutedSpaceblue: "#4A5A6B",
      },
      fontFamily: { Roboto: ["Roboto", "sans-serif"] },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};
export default config;
