/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "hsl(231, 69%, 60%)",
        "red": "hsl(0, 94%, 66%)",
        "gray": "hsl(229, 8%, 60%)",
        "dark": "hsl(229, 31%, 21%)",
        "dark-opaque": "rgb(36,42,69,0.95)"
      },

      fontFamily: {
        sans: [ 'Rubik', 'sans-serif' ],
      },

      screens: {
        tablet: "680px",
        laptop: "1200px"
      },
    },
  },
  plugins: [],
}
