const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#0e1111',
        purple: {
          100: '#D7D2D8',
          200: '#BCB4BE',
          300: '#948798',
          400: '#87788B',
          500: '#7A697E',
          600: '#6D5A72',
          700: '#645268',
          800: '#504253'
        }
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Neucha', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  variants: {},
  plugins: []
}
