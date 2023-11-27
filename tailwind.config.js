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
        'border': '#D7DADD',
        'brown': "#CBAC86"
      },
      width: {
        'cont': '1200px',
        'bgr': '1600px'
      },
      height: {
        '720': '720px',
        '1600': '1600px'
      },
      backgroundImage: {
        'bgWoman': "url('assets/bg-woman.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}