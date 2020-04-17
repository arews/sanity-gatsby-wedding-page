const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createTextPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProject(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const textEdges = (result.data.allSanitySampleProject || {}).edges || []

  textEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/${slug}/`

      reporter.info(`Creating page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/texts.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createTextPages(graphql, actions, reporter)
};
