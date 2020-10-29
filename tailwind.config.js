module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    // to run the purge, you need to set NODE_ENV environmental variable to "production"
    "./*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        "hostgator-yellow": '#FFCF00',
        "hostgator-blue": '#2E93EE',
        "hostgator-gray": '#363636',
        "hostgator-dark-blue": '#1F2044',
      },
      fontFamily: {
        sans: ['Galano Grotesque Alt Bold']
      }
    },
  },
  variants: {},
  plugins: [],
}
