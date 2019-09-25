const path = require(`path`)
// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')

  const allYaml = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          edges {
            node {
              slug
              images
            }
          }
        }
      }
    `)
  )

  // const allMd = await wrapper(
  //   graphql(`
  //     {
  //       allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
  //         edges {
  //           node {
  //             frontmatter {
  //               path
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  // )

  allYaml.data.projects.edges.forEach(edge => {
    createPage({
      path: `work/${edge.node.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
        images: `/${edge.node.images}/`,
      },
    })
  })

  // allMd.data.allMarkdownRemark.edges.forEach(edge => {
  //   console.log('%c ( ͡° ͜ʖ ͡°)', 'color:tomato;font-size:30px;', edge)
  //   const slug = `${edge.node.frontmatter.path}`
  //   createPage({
  //     path: `/${slug}`,
  //     component: path.resolve('./src/templates/project.tsx'),
  //     context: {
  //       slug,
  //     },
  //   })
  // })
}
