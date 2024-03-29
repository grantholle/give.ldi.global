import React from "react"
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
      <nav className={`header-nav ${this.white ? 'white-nav' : ''}`}>
        <div className="container flex justify-between items-center py-8">
          <div className="w-1/2 sm:w-1/3 md:w-64">
            <a href="//ldi.global">
              <Logo/>
            </a>
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

              <div className="top-nav-item">
                <div>
                  <a href="/#" className="top-nav-link dropdown-anchor">About</a>
                  <div className="dropdown-menu">
                    <a className="top-nav-link" href="//ldi.global/how-we-serve">How We Serve</a>
                    <a className="top-nav-link" href="//ldi.global/training">Training</a>
                    <a className="top-nav-link" href="//ldi.global/leadership">Leadership</a>
                  </div>
                </div>
              </div>
              <div className="top-nav-item">
                <div>
                  <a href="/#" className="top-nav-link dropdown-anchor">Explore <span className="lowercase">i</span>SC</a>
                  <div className="dropdown-menu">
                    <a className="top-nav-link" href="//ldi.global/our-schools">Discover Our Schools</a>
                    <a className="top-nav-link" href="//ldi.global/philosophy">Philosophy</a>
                    <a className="top-nav-link" href="//ldi.global/opportunities">Opportunities</a>
                  </div>
                </div>
              </div>
              <div className="top-nav-item">
                <a className="top-nav-link" href="//give.ldi.global">Give</a>
              </div>
              <div className="top-nav-item">
                <a className="top-nav-link" href="//ldi.global/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
