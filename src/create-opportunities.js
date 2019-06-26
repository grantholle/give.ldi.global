const path = require('path')

module.exports = async (graphql, createPage) => {
  const result = await graphql(`{
    allDatoCmsOpportunity {
      edges {
        node{
          id
          title
          description
          entity {
            id
            name
            location
            sidebarDescription
          }
          regions
          department
          pageSlug
        }
      }
    }
  }`)

  for (const { node } of result.data.allDatoCmsOpportunity.edges) {
    createPage({
      path: `opportunities/${node.pageSlug}`,
      component: path.resolve('./src/components/opportunity.js'),
      context: node
    })
  }
}
