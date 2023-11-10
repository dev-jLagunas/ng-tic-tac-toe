/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/app/home/home.component.html",
    "src/app/games/one-player/one-player.component.html",
    "src/app/games/two-player/two-player.component.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ["Bree Serif"],
        rubik: ["Rubik"],
        neon: ["Tilt Neon"],
      },
      width: {
        "90vw": "90vw",
      },
      height: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
