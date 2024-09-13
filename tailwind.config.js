/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk",
      },
      colors: {
        primary_green: "#B9FF66",
        primary_dark: "#191A23",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
