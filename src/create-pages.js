const path = require('path')

module.exports = async (graphql, createPage) => {
  const result = await graphql(`{
    allDatoCmsPage {
      edges {
        node {
          id
          pageSlug
          publish
        }
      }
    }
  }`)

  for (const { node } of result.data.allDatoCmsPage.edges) {
    if (!node.publish) {
      continue;
    }

    createPage({
      path: node.pageSlug,
      component: path.resolve('./src/components/page.js'),
      context: {
        id: node.id
      }
    })
  }
}
