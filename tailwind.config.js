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
        'brown': '#CBAC86',
      },
      width: {
        'cont': '1200px',
        'bgr': '1600px',
      },
      height: {
        '720': '720px',
        '1600': '1600px'
      },
      backgroundColor: {
        'black': '#303030',
        'brown': '#CBAC86',
      },
      background: {
        'divider': 'linear-gradient(to top, rgba(203,172,134, 0) 0%, rgba(203,172,134, .5) 12.5%, rgba(203,172,134, 1) 50%, rgba(203,172,134, .5) 87.5%, rgba(203,172,134, 0) 100%)'
      },
      borderColor: {
        'border': '#D7DADD',
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
        'h4': ['20px', {
          lineHeight: '28px',
          fontWeight: '600',
        }],
        'h5': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'basicMedium': ['16px', {
          lineHeight: '24px',
          fontWeight: '500',
        }],
        'largeButton': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'small': ['14px', {
          lineHeight: '20px',
          fontWeight: '400',
        }],
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}