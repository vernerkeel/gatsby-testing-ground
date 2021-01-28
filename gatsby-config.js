module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://mms.webcontext.uk`,
        sitemap: `https://mms.webcontext.uk/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-leaflet`,
  ],
};
