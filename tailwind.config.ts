import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#EA7F68",
        coralLight: "#F5A48A",
        cream: "#FFF8F2",
        creamDark: "#F2E7DC",
        beige: "#F6EDE5",
        beigeDark: "#EAD9C9",
        softbrown: "#4D3B33",
        softbrownLight: "#7A5C4E",
        softblack: "#2C2C2C",
        softblackLight: "#494949",
        wood: "#DDBB9B",
        woodDark: "#C3A283",
      },
      
    },
  },
  plugins: [],
};

export default config;
