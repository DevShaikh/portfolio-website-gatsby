const path = require("path")
const projects = require("./src/data/projects")

exports.createPages = async ({ actions }) => {
  projects.forEach(data => {
    const slug = data.title.split(" ").join("-").toLowerCase()

    actions.createPage({
      path: "/projects/" + slug,
      component: path.resolve("./src/templates/projectDetails.js"),
      context: { slug: slug },
    })
  })
}
