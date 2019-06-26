import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Logo from "../images/ldi-logo.svg"
import NavItem from "../components/nav-item"
import Li from "../images/linked-in.svg"
import Fb from "../images/fb.svg"
import Twitter from "../images/twitter.svg"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsMenuItem(filter: {root: {eq: true}, location: {eq: "footer"}}, sort: {fields: [position], order: ASC}) {
          edges {
            node {
              id
              label
              externalUrl
              pageReference {
                pageSlug
              }
            }
          }
        }
      }
    `}
    render={data =>
      <footer className="bg-blue-800 pb-36 pt-8 text-white text-xs">
        <div className="container white-nav">
          <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-14 border-b border-blue-500">
            <div className="w-64 lg:w-48">
              <Link className="block mx-auto" to="/">
                <Logo/>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:-mx-6 lg:mx-0 pt-6 lg:pt-0 justify-between items-center text-sm">
              {data.allDatoCmsMenuItem.edges.map(edge => <NavItem key={edge.node.id} item={edge} />)}
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center text-blue-400 py-12 text-center lg:text-left">
            <div className="w-full lg:w-auto">
              © {new Date().getFullYear()} Leadership Development International. All Rights Reserved
            </div>
            <div className="w-full py-4 lg:py-0 lg:w-auto">
              <a className="inline-block text-white mr-2 w-6 h-6" href="//www.linkedin.com/company/ldi-china/" target="_blank" rel="noopener noreferrer">
                <Li />
              </a>
              <a className="inline-block text-white mx-2 w-6 h-6" href="//www.facebook.com/IntlSchoolsConsortium/" target="_blank" rel="noopener noreferrer">
                <Fb />
              </a>
              <a className="inline-block text-white ml-2 w-6 h-6" href="//twitter.com/ischoolscons" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    }
  />
)

export default Footer
