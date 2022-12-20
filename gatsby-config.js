module.exports = {
  siteMetadata: {
    title: `Jamaica Company`,
    description: `Description example.`,
    siteUrl: `https://jamaicacompany.club`,
    home: {
      title: `Jamaica Company`,
      description: `Jamaica Company - jamaicacompany.club`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamaica Company`,
        short_name: `Jamaica Company`,
        start_url: `/`,
        background_color: `#0d518c`,
        theme_color: `#0d518c`,
        display: `minimal-ui`,
        icon: `static/assets/logos/logo.jpg`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-xxx",
        head: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`
  ],
}
