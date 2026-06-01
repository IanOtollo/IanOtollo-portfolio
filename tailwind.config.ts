import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        border: "#222220",
        "text-primary": "#F5F5F0",
        "text-secondary": "#888884",
        "text-tertiary": "#555552",
        gold: "#C8A96E",
        "gold-dim": "#9A7B4A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "slow-spin": "spin 60s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
