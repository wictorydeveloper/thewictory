import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#080A0F",
        graphite: "#151820",
        pearl: "#F7F4EE",
        signal: "#35E0A1",
        cobalt: "#326BFF",
        ember: "#FF7A3D"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(8, 10, 15, 0.16)",
        glow: "0 0 56px rgba(53, 224, 161, 0.28)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
