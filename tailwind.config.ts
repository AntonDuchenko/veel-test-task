import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-title": "var(--neutral-title)",
        "neutral-body": "var(--neutral-body)",
        "neutral-stroke": "var(--neutral-stroke)",
        "neutral-backgroud": "var(--neutral-backgroud)",
        cancel: "var(--cancel)",
        process: "var(--process)",
        success: "var(--success)",
        "primary-high": "var(--primary-high)",
        "primary-medium": "var(--primary-medium)",
        "primary-light": "var(--primary-light)",
        "secondary-high": "var(--secondary-high)",
        "secondary-medium": "var(--secondary-medium)",
        "secondary-light": "var(--secondary-light)",
        "dark-bg": "var(--dark-bg)",
        "dark-card": "var(--dark-card)",
        "dark-store": "var(--dark-store)",
      },
    },
  },
  plugins: [],
} satisfies Config;
