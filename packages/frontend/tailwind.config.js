/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        zero: "0rem",
      },
      spacing: {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
      },
      fontFamily: {
        BRFirma: ["BRFirma", "sans-serif"],
        "BRFirma-bold": ["BRFirma-bold", "sans-serif"],
      }, //end of fontFamily

      colors: {
        red: {
          cred: "#EA007E",
        },
        black: {
          c100: "#111111",
        },
        purple: {
          cpurple: "#F2FFE6",
        },
       orange: {
          corange: "#FF4200",
        },
      },
    },
  },
  plugins: [],
};
