import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px", "2xl": "1320px" }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      colors: {
        sky: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bee0fd",
          300: "#90cdfb",
          400: "#5ab1f7",
          500: "#3590ef",
          600: "#1f72e3",
          700: "#1c5dd0",
          800: "#1d4ca9",
          900: "#1e4286"
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        },
        saffron: {
          50: "#fff8eb",
          100: "#ffe9c6",
          200: "#ffd089",
          300: "#ffae4c",
          400: "#ff8e22",
          500: "#f96e09",
          600: "#dd5004",
          700: "#b73907",
          800: "#94290d",
          900: "#7a230e"
        },
        ink: {
          DEFAULT: "#0a1426",
          soft: "#1f2a44",
          muted: "#5a6783",
          subtle: "#8b96b1"
        },
        paper: {
          DEFAULT: "#ffffff",
          2: "#f6f8fc",
          3: "#ebf0f7",
          4: "#dde4ef"
        },
        border: {
          DEFAULT: "#e3e8f0",
          strong: "#cdd5e3"
        }
      },
      boxShadow: {
        card: "0 6px 32px -8px rgba(15, 60, 110, 0.10), 0 2px 6px rgba(15,30,60,0.04)",
        "card-hover": "0 24px 60px -12px rgba(15, 60, 110, 0.22), 0 6px 18px rgba(15,30,60,0.08)",
        ring: "0 0 0 8px rgba(53,144,239,0.12)",
        glow: "0 0 60px rgba(53,144,239,0.35)"
      },
      backgroundImage: {
        "mesh-aurora":
          "radial-gradient(at 18% 18%, rgba(31,114,227,0.30) 0px, transparent 50%),radial-gradient(at 82% 8%, rgba(16,185,129,0.25) 0px, transparent 50%),radial-gradient(at 4% 92%, rgba(249,110,9,0.22) 0px, transparent 50%),radial-gradient(at 88% 78%, rgba(31,114,227,0.28) 0px, transparent 50%)",
        "grid-soft":
          "linear-gradient(to right, rgba(15,30,60,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,30,60,0.05) 1px, transparent 1px)"
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        float: "float 14s ease-in-out infinite",
        "float-slow": "float 22s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 60s linear infinite reverse",
        blob: "blob 16s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "fade-up": "fadeUp .8s cubic-bezier(.22,.61,.36,1) both",
        "pulse-ring": "pulseRing 2s cubic-bezier(.4,0,.6,1) infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-26px) translateX(18px)" }
        },
        blob: {
          "0%,100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "33%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "66%": { borderRadius: "50% 60% 30% 60% / 30% 40% 70% 50%" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.7)", opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
