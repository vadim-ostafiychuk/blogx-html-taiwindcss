/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['"Roboto"', "sans-serif", "ui-sans-serif", "system-ui"],
    },
    extend: {
      gridTemplateRows: {
        "auto-fr-auto": "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
