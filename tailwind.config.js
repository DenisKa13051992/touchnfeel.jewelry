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
      },
      fontSize: {
        'h1': ['48px', {
          lineHeight: '56px',
          fontWeight: 'bold',
        }],
        'h2': ['40px', {
          lineHeight: '48px',
          fontWeight: '600',
        }],
        'h3': ['32px', {
          lineHeight: '40px',
          fontWeight: '600',
        }],
        'basicMedium': ['16px', {
          lineHeight: '24px',
          fontWeight: '500',
        }],
        'largeButton': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'h5': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }]
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}