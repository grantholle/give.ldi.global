import React from "react"
import Cta from "../components/blocks/cta"
import opps from "../components/cta-footer"

import Logo from "../images/ldi-logo.svg"
import Li from "../images/linked-in.svg"
import Fb from "../images/fb.svg"
import Twitter from "../images/twitter.svg"

const Footer = () => (
  <>
    <section className={`content-block block-button_action`}>
      <Cta data={opps} />
    </section>

    <footer className="bg-blue-800 pb-36 pt-8 text-white text-xs">
      <div className="container white-nav">
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-14 border-b border-blue-500">
          <div className="w-64 lg:w-48">
            <a className="block mx-auto" href="//ldi.global">
              <Logo/>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:-mx-6 lg:mx-0 pt-6 lg:pt-0 justify-between items-center text-sm">
            <div className="top-nav-item"><a className="top-nav-link" href="//ldi.global/how-we-serve">How We Serve</a></div>
            <div className="top-nav-item"><a className="top-nav-link" href="//ldi.global/our-schools">Discover Our Schools</a></div>
            <div className="top-nav-item"><a className="top-nav-link" href="//ldi.global/opportunities">Opportunities</a></div>
            <div className="top-nav-item"><a className="top-nav-link" href="//ldi.global/contact">Contact</a></div>
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
  </>
)

export default Footer
