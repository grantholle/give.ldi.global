import React from "react"

import Layout from "../components/layout"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Layout whiteNav={true}>
    <Blocks content={[
      {
        id: `hero`,
        block: `hero`,
        headline: `Password reset was successful`
      },
      {
        id: `content`,
        block: `content`,
        content: `<p class="text-center">Your password reset was successful. Please follow the link you receive to reset your password.</p>`
      }
    ]} />
  </Layout>
)

export default SignIn
