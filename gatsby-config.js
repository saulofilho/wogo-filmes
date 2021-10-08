module.exports = {
  siteMetadata: {
    title: `Wogo Filmes`,
    description: `Description example.`,
    siteUrl: `https://wogofilmes.com.br`,
    home: {
      title: `Wogo Filmes`,
      description: `Description example.`,
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
        name: `Wogo Filmes`,
        short_name: `Wogo Filmes`,
        start_url: `/`,
        background_color: `#0d518c`,
        theme_color: `#0d518c`,
        display: `minimal-ui`,
        icon: `static/assets/logo.png`,
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
  ],
}
