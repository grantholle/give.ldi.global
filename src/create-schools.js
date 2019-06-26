const path = require('path')

module.exports = async (graphql, createPage) => {
  const result = await graphql(`{
    allDatoCmsSchool {
      edges {
        node {
          id
          slug
        }
      }
    }
  }`)

  for (const { node } of result.data.allDatoCmsSchool.edges) {
    createPage({
      path: `/our-schools/${node.slug}`,
      component: path.resolve('./src/components/school.js'),
      context: {
        id: node.id
      }
    })
  }
}
