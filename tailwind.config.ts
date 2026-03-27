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
        brand: {
          purple: "#BB34CB",
          "purple-light": "#D48ADC",
          "purple-dark": "#7D2387",
          "purple-lightest": "#E7B3EE",
          mint: "#BBEDD4",
          "green-medium": "#5FA482",
          "green-dark": "#3F6D57",
          black: "#000000",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "48rem",
        wide: "80rem",
      },
      borderRadius: {
        brand: "0.75rem",
        "brand-lg": "1rem",
        "brand-xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
