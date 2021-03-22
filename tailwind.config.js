module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gr': "url('/public/img/header.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
  ],
}
