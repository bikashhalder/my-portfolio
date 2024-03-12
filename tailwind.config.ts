import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #FFC5A7 5px, #FFC5A7 100px)",
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#BD5943",
        light: "#FFC5A7",
        primary: "#FF846D",
        primaryDark: "#AD6F62",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
