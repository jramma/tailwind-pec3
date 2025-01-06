/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f472b6",
        secondary: "#a3e635",
        terciary: "#34d399",
        accent: "#4ade80",
        background: "#ffffff",
        white: "#f1f1f1",
        black: "#0f0f0f",
        text: "#000000",
        green: "#10b981",
        uoc: "#00046A",
        border: "#000000",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      spacing: {
        unit: "1rem",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        serif: ["dm serif text", "serif"],
        righteous: ["Righteous", "sans-serif"],
      },
      boxShadow: {
        card: "7px 0 0 rgb(0 0 0 / 100%)",
      },
      scale: {
        "card-hover": "1.05",
      },
    },
  },
  plugins: [],
};
