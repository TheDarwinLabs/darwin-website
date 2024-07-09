import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        sm: "460px",
        md: "760px",
        lg: "960px",
        xl: "1440px",
        "2xl": "1920px",
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
      backgroundSize: {
        "50%": "50%",
        "75%": "75%",
      },
      colors: {
        brand: "var(--brand)",
        // primary: "var(--primary)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-1":
          "radial-gradient(47.81% 261.3% at 27.81% 67.61%, #000000 0%, rgba(0, 0, 0, 0.6) 54.47%, rgba(0, 0, 0, 0) 100%), url('/bg/01.svg')",
        "hero-2":
          "radial-gradient(38.33% 209.14% at 27.81% 67.61%, #000000 0%, rgba(0, 0, 0, 0.6) 54.47%, rgba(0, 0, 0, 0) 100%), url('/bg/02_1.svg'), url('/bg/02_2.svg')",
        "hero-3":
          "radial-gradient(43.4% 70.48% at 33.3% 37.17%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.42) 54.47%, rgba(0, 0, 0, 0) 100%),url('/bg/03_1.svg'), url('/bg/03_2.svg')",
        "hero-4":
          "radial-gradient(43.4% 70.48% at 33.3% 37.17%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.42) 54.47%, rgba(0, 0, 0, 0) 100%),url('/bg/04_1.svg'), url('/bg/04_2.svg')",
        "hero-5":
          "radial-gradient(65.77% 99.36% at 71.76% 52.81%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.24) 54.47%, rgba(0, 0, 0, 0) 100%),url('/bg/05_1.svg'), url('/bg/05_2.svg')",
        "hero-6":
          "radial-gradient(47.64% 242.06% at 46.53% 56.68%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 54.47%, rgba(0, 0, 0, 0) 100%),url('/bg/06_1.svg'), url('/bg/06_2.svg')",
        "hero-7":
          "radial-gradient(46.11% 62.67% at 62.36% 50.06%, #000000 0%, rgba(0, 0, 0, 0.6) 54.47%, rgba(0, 0, 0, 0) 100%), url('/bg/07.svg')",
      },
      letterSpacing: {
        tight: "-.02em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
