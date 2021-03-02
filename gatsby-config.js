
module.exports = {
  siteMetadata: {
    title: `Several Levels`,
    description: `Company Website for Several Levels Productions, LLC`,
    author: `@Harrison1`,
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Several Levels`,
        short_name: `Several Levels`,
        start_url: `/`,
        background_color: `#27cfe6`,
        theme_color: `#27cfe6`,
        display: `minimal-ui`,
        icon: `src/favicons/ms-icon-310x310.png`,
      },
    },
  ]
}