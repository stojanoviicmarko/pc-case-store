// tailwind.config.js
module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.6rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5d6abf',
      'secondary': '#5d9bbf',
      'danger': '#e3342f',
     })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
