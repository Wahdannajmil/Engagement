/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF4EF",
        blobRose: "#FFC7D9",
        blobLav: "#E3D6FF",
        blobPeach: "#FFE1B8",
        ink: "#2B1826",
        inkSoft: "#5E4B57",
        rose: "#E8749A",
        roseDeep: "#C85A80",
        roseBg: "#FCE9EF",
        sage: "#8CA382",
        sageBg: "#E7EFE3",
        gold: "#D4A94E",
        cardLine: "#F0E4E9",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(15px,-20px) scale(1.05)" },
        },
        floatSlow2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-20px,15px) scale(1.08)" },
        },
        sparklePulse: {
          "0%, 100%": { opacity: 0.5, transform: "scale(0.9) rotate(0deg)" },
          "50%": { opacity: 1, transform: "scale(1.1) rotate(15deg)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        floatSlow2: "floatSlow2 16s ease-in-out infinite",
        floatSlow3: "floatSlow 18s ease-in-out infinite",
        sparklePulse: "sparklePulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
