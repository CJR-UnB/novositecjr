import type { Config } from "tailwindcss";

const CustomStyle = require("tailwindcss/plugin")(function ({
  addUtilities,
}: any) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}", // Conteúdo do segundo trecho de código
  ],
  theme: {
    extend: {
      colors: {
        aquagreen: "#27BD80",
        spaceblue: "#001830",
        offwhite: "#f2f2f2",
        navyblue: "#002F67",
        white: "#FFFFFF",
        black: "#000000",
        green: "#38C28A",
        mutedSpaceblue: "#4A5A6B",
      },
      fontFamily: { Roboto: ["Roboto", "sans-serif"] },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
    CustomStyle, // Plugin customizado adicionado ao array de plugins
  ],
};

export default config;
