module.exports = {
  siteMetadata: {
    title: `Leadership Development International`,
    description: `Since 1986, LDi Education has served the multinational community in China, expanding to the Middle East in 2010. LDi Education is a division of the LDi family of companies, an organization committed to leadership development, training, and transformation around the world.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans`,
            variants: [`400`, `700`]
          },
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leadership Development International`,
        short_name: `LDi`,
        start_url: `/`,
        background_color: `#acb7c1`,
        theme_color: `#005b94`,
        display: `minimal-ui`,
        icon: `src/images/ldi-logo.png`,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
