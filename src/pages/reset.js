import React from "react"

import Layout from "../components/layout"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Layout whiteNav={true}>
    <Blocks content={[
      {
        id: `hero`,
        block: `hero`,
        headline: `Reset your password`
      },
      {
        id: `reset-form`,
        block: `reset`
      }
    ]} />
  </Layout>
)

export default SignIn
