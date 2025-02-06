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
      },
    },
  },
  plugins: [],
} satisfies Config;
