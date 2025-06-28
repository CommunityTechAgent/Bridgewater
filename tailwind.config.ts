import type { Config } from "tailwindcss"
import shadcnConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...shadcnConfig,
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...shadcnConfig.theme,
    extend: {
      ...shadcnConfig.theme.extend,
      colors: {
        ...shadcnConfig.theme.extend.colors,
        "diplomatic-navy": "#0A1628",
        "ambassador-gold": "#D4AF37",
        "pearl-white": "#FEFEFE",
        "platinum-gray": "#F8F9FA",
        "ocean-blue": "#1E3A8A",
        "warm-ivory": "#FFF8E7",
        "soft-charcoal": "#374151",
        "success-green": "#059669",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Segoe UI", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [...shadcnConfig.plugins, require("tailwindcss-animate")],
}

export default config
