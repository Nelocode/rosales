import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#257874", // User specified Teal
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ca8a04", // Gold
          foreground: "#ffffff",
        },
        accent: {
            DEFAULT: "#1e3a8a", // Navy
            foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        heading: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
};
export default config;
