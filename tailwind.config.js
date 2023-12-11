/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'background-shine': 'url("../src/assets/images/background-shine-1-min-compressed.jpg")',

      }
    },
  },
  plugins: [],
}

