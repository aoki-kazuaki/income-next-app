import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))"
        },
        error: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-on-error))"
        },
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        ring: "hsl(var(--color-ring))",
        border: "hsl(var(--color-border))",
      }
    }
  },
  plugins: []
};

export default config;
