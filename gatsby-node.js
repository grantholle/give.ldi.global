const makePages = require('./src/create-pages')
const makeOpportunities = require('./src/create-opportunities')
const makeSchools = require('./src/create-schools')
const PurgeCssPlugin = require(`purgecss-webpack-plugin`)
const purgeCssConfig = require('./purgecss.config')

exports.createPages = async ({ graphql, actions }) => {
  // Create pages
  makePages(graphql, actions.createPage)

  // Create opportunity pages
  makeOpportunities(graphql, actions.createPage)

  // Create school pages
  makeSchools(graphql, actions.createPage)
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage.includes(`develop`)) {
    return
  }

	// Add PurgeCSS in production
	// See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
	if (stage.includes(`build`)) {
		actions.setWebpackConfig({
			plugins: [ new PurgeCssPlugin(purgeCssConfig) ],
		})
	}
}