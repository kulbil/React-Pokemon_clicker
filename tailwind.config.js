/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pokemon-view': "url('../src/img/assets/background.png')",
      },
    },
  },
  plugins: [],
}

