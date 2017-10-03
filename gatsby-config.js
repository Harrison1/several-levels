module.exports = {
  siteMetadata: {
    title: `several levels`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-stylus`, {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-73708584-1`,
    },
  }],
}