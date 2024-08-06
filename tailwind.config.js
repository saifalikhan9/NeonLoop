/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Brittany: ["Brittany", "sans-serif"],
        Neoneon: ["Neoneon", "sans-serif"],
        MoonTime: ["Moon Time", "sans-serif"],
        Twister: ["Twister", "sans-serif"],
        MeowScript: ["Meow Script", "sans-serif"],
        GreatVibes: "Great Vibes",
        ShadowIL: "ShadowIL",
      },
      colors: {
        
        neon: "#17dd7e",
        textShadow: {
          neon: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
          glow: "0 0 10px rgba(255, 255, 255, 0.5)",
        },
        boxShadow: {
          neon: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
        },
        "neon-blue":
          "0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f", // Blue neon effect
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
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
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-neon": {
          textShadow:
            "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
        },
        ".text-glow": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        },
        ".box-shadow-neon": {
          boxShadow:
            "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
        },
        ".box-shadow-neon-blue": {
          boxShadow:
            "0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f",
        },
      });
    },
  ],
};
