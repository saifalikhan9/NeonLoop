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
        whiteGlow : '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #bcbcbc, 0 0 40px #bcbcbc, 0 0 50px #bcbcbc, 0 0 60px #bcbcbc',
      },
      boxShadow: {
        neon: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14",
      },
      "neon-blue": "0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f", // Blue neon effect
      fontFamily:{
        'brittany': ['Brittany', 'sans-serif'],
        'shadows': ['Shadows', 'sans-serif'],
        'neoneon': ['Neoneon', 'sans-serif'],
        'moontime': ['Moon Time', 'sans-serif'],
        'twister': ['Twister', 'sans-serif'],
        'meow': ['Meow Script', 'sans-serif'],
        'Vibes' : "Great Vibes"
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
        ".text-glow": {  
          textShadow : '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #bcbcbc, 0 0 40px #bcbcbc, 0 0 50px #bcbcbc, 0 0 60px #bcbcbc',
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
