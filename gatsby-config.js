module.exports = {
  siteMetadata: {
    title: "My gatsby project",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
            exportLocalsConvention: "asIs",
          },
        },
      },
    },
  ],
};
