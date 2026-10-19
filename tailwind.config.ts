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
        "bg-base": "#F0EBE6",
        "text-dark": "#2D2D2D",
        "accent-magenta": "#E81A8F",
        "accent-yellow": "#FDE047",
        "accent-purple": "#AA88EB",
        "accent-cyan": "#4BC2B8",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        paper: "0 12px 32px -8px rgba(45, 45, 45, 0.14), 0 4px 12px -2px rgba(45, 45, 45, 0.08)",
        phone: "0 25px 50px -12px rgba(45, 45, 45, 0.35), 0 0 0 1px rgba(45, 45, 45, 0.1)",
        sticker: "0 6px 16px rgba(45, 45, 45, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
