import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Our Love Story palette ----
        lavender: {
          50: "#F6F2FC",
          100: "#EBE1F8",
          200: "#D9C7F0",
          300: "#C3A8E6",
          400: "#AD8ADB",
          500: "#9670C9",
          DEFAULT: "#C3A8E6",
        },
        blush: {
          50: "#FFF3F7",
          100: "#FCE1EC",
          200: "#F8C2D8",
          300: "#F2A0C0",
          400: "#EA7EA8",
          500: "#DD5E90",
          DEFAULT: "#F2A0C0",
        },
        skyluv: {
          50: "#F0F6FF",
          100: "#DCEBFF",
          200: "#B8D6FB",
          300: "#93BFF2",
          400: "#6FA3E3",
          500: "#5488CC",
          DEFAULT: "#B8D6FB",
        },
        inkplum: {
          DEFAULT: "#211A2C",
          soft: "#362B47",
        },
        cream: "#FFFBFE",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      backgroundImage: {
        "dreamy-gradient":
          "linear-gradient(135deg, #F6F2FC 0%, #FCE1EC 45%, #DCEBFF 100%)",
        "dusk-gradient":
          "linear-gradient(180deg, #211A2C 0%, #362B47 55%, #4A3A5C 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-26px) translateX(10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.13)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.13)" },
          "70%": { transform: "scale(1)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        heartbeat: "heartbeat 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
