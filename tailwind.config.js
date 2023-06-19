const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tahurple': 'rgb(49, 13, 52)',
        'tahpurple-100': 'rgb(81, 21 ,84)',
        'tahpantone': '#F05F3C',
        'tahmustard': '#FFBA0D',
        'tahpurple-light': '#6E5571'
      },
      screens: {
        'xs': '450px',
      },
    },
  },
  plugins: [],
}
