module.exports = {
  siteMetadata: {
    title: 'TexLab',
    description: 'LaTeX Language Server',
    author: 'Eric Förster',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TexLab',
        short_name: 'TexLab',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00e676',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-autolink-headers', 'gatsby-remark-prismjs'],
      },
    },
    'gatsby-plugin-catch-links',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
