/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],


  theme: {
    extend: {
      colors: {
        neon: "#17dd7e",
      },
      textShadow: {
        neon: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
        'glow': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      boxShadow: {
        neon: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
      },
      "neon-blue": "0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f", // Blue neon effect
      fontFamily:{
        'brittany': ['Brittany', 'sans-serif'],
        'neoneon': ['Neoneon', 'sans-serif'],
        'moontime': ['Moon Time', 'sans-serif'],
        'twister': ['Twister', 'sans-serif'],
        'meow': ['Meow Script', 'sans-serif'],
        'Vibes' : "Great Vibes",
        'ShadowIL': "ShadowIL",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-neon": {
          textShadow:
            "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
            
        },
        '.text-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
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
