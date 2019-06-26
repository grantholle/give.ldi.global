import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import NavItem from "./nav-item"
import Logo from "../images/ldi-logo.svg"

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.white = props.white

    this.state = {
      open: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            allDatoCmsMenuItem (
              filter: {
                root: {
                  eq: true
                }
                location: {
                  eq: "header"
                }
              }
              sort:{
                fields: [position]
                order: ASC
              }
            ) {
              edges {
                node {
                  id
                  label
                  externalUrl
                  pageReference {
                    pageSlug
                  }
                  treeChildren {
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
          }
        `}
        render={data =>
          <nav className={`header-nav ${this.white ? 'white-nav' : ''}`}>
            <div className="container flex justify-between items-center py-8">
              <div className="w-1/2 sm:w-1/3 md:w-64">
                <Link to="/">
                  <Logo/>
                </Link>
              </div>

              <div className="top-nav-wrapper">
                <button
                  className="flex lg:hidden items-center p-2 -mr-2"
                  onClick={this.toggleMenu}
                >
                  <div className="w-8 h-6 flex flex-col justify-between">
                    <div className={`h-1 rounded-full w-3/4 self-end bg-${this.white ? 'white' : 'blue-500'}`}></div>
                    <div className={`h-1 rounded-full w-full bg-${this.white ? 'white' : 'blue-500'}`}></div>
                    <div className={`h-1 rounded-full w-1/3 self-end bg-${this.white ? 'white' : 'blue-500'}`}></div>
                  </div>
                  <div className={`text-sm pl-2 text-${this.white ? 'white' : 'blue-500'}`}>MENU</div>
                </button>

                <div className={`menu-inner ${this.state.open ? 'open' : ''}`}>
                  <button
                    className="close-button"
                    onClick={this.toggleMenu}
                  >
                    <div className="h-1 rounded-full"></div>
                    <div className="h-1 rounded-full"></div>
                  </button>

                  {data.allDatoCmsMenuItem.edges.map(edge => <NavItem key={edge.node.id} item={edge} />)}
                </div>
              </div>
            </div>
          </nav>
        }
      />
    )
  }
}

export default Nav
