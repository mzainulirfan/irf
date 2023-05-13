/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato',sans-serif",
        arvo: "'Arvo',serif",
      },
      colors: {
        textGreen: "#4DB77E",
        bgWhite: "#FBFAFA",
        textDark: "#3C3C3C",
        bgDark: "#1B2430",
      },
    },
  },
  plugins: [],
};
