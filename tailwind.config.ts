import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070D",
        panel: "#0C1420",
        panel2: "#101A2C",
        line: "rgba(255,255,255,0.08)",
        ink: "#F5F7FA",
        dim: "#8A93A6",
        accent1: "#1AA6FF",
        accent2: "#01E9FE",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #1AA6FF, #01E9FE)",
      },
    },
  },
  plugins: [],
};

export default config;
