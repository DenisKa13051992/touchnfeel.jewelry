/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#303030',
      },
      width: {
        '300': '75rem',
      }
    },
  },
  plugins: [],
}