module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'yellow-primary': '#FFEB3B',
    }),
    screens: {
      'sm': '640px',
      'xs': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        '300px': '300px'
      },
      fontFamily: {
        'serif': ['Montserrat']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
