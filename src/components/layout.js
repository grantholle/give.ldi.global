import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, whiteNav }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Nav white={whiteNav} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
