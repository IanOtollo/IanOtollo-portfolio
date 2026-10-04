import type { Config } from "tailwindcss"

const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "80rem" },
    },
    extend: {
      colors: {
        background: token("background"),
        foreground: token("foreground"),
        card: token("card"),
        muted: token("muted"),
        "muted-foreground": token("muted-foreground"),
        border: token("border"),
        primary: token("primary"),
        "primary-foreground": token("primary-foreground"),
        accent: token("accent"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "var(--radius)",
        "2xl": "calc(var(--radius) + 0.5rem)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scan: {
          "0%": { top: "6%" },
          "50%": { top: "88%" },
          "100%": { top: "6%" },
        },
        caret: {
          "0%, 18%": { opacity: "1", backgroundColor: "hsl(262 85% 68%)" },
          "25%": { opacity: "0", backgroundColor: "hsl(262 85% 68%)" },
          "30%": { opacity: "0", backgroundColor: "hsl(320 90% 70%)" },
          "37%, 55%": { opacity: "1", backgroundColor: "hsl(320 90% 70%)" },
          "62%": { opacity: "0", backgroundColor: "hsl(320 90% 70%)" },
          "66%": { opacity: "0", backgroundColor: "hsl(190 90% 62%)" },
          "73%, 88%": { opacity: "1", backgroundColor: "hsl(190 90% 62%)" },
          "95%": { opacity: "0", backgroundColor: "hsl(190 90% 62%)" },
          "99%": { opacity: "0", backgroundColor: "hsl(262 85% 68%)" },
          "100%": { opacity: "1", backgroundColor: "hsl(262 85% 68%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        scan: "scan 3.6s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        blink: "blink 1.4s ease-in-out infinite",
        caret: "caret 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
