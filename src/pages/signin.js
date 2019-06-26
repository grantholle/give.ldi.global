import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Layout whiteNav={true}>
    <SEO
      pageTitle="Sign in to Give"
      title="Sign in to give to LDi"
      description=""
      image={null}
    />

    <Blocks content={[
      {
        id: `hero`,
        block: `hero`,
        headline: `Sign in to Give`
      },
      {
        id: `signin-form`,
        block: `signin`
      }
    ]} />
  </Layout>
)

export default SignIn
