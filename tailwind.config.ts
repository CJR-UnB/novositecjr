import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aquagreen: "#27BD80",
        spaceblue: "#001830",
        offwhite: "#D9D9D9",
        navyblue: "#002F67",
        white: "#FFFFFF",
        black: "#000000",
        green: "#73C04A",
      },
    },
  },
  plugins: [],
};
export default config;
