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
    extend: {},
  },
  variants: {},
  plugins: [],
}
