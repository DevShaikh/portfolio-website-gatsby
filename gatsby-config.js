// gatsby-config.js
module.exports = {
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
  siteMetadata: {
    title: "Ahmed Shaikh",
    description: "My portfolio website",
    copyright: "Copyright 2021 - Ahmed Shaikh",
  },
}
