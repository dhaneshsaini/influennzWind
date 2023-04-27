/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        moody: "#7F73BB",
        dark: "#141414",
        darktrans: "rgba(0,0,0,0.5)",
        darktrans1: "rgba(0, 0, 0, 0.2)"
      },
      fontFamily: {
        cormorant: "'Cormorant', serif",
        spartan: "'League Spartan', sans-serif",
        questrial: "'Questrial', sans-serif",
        satisfy: "'Satisfy', cursive"
      },
      height: {
        125: "31.3rem",
        152: "38rem"
      }
    },
  },
  plugins: [],
}