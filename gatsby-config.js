// gatsby-config.js
module.exports = {
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
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
