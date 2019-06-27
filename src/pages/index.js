import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Layout whiteNav={true}>
    <Blocks content={[
      {
        id: `hero`,
        block: `hero`,
        headline: `Give to LDi`
      }
    ]} />

    <section className="content-block block-content">
      <div>
        <div className="container max-w-sm mx-auto">
          <ul>
            <li><Link to="/signin">Sign in</Link></li>
            <li><Link to="/reset">Password reset</Link></li>
            <li><Link to="/reset-success">Password reset success</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signup-success">Sign up success</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default SignIn
