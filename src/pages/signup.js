import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Layout whiteNav={true}>
    <SEO
      pageTitle="Create a Give Account"
      title="Create an account to give to LDi"
      description=""
      image={null}
    />

    <Blocks content={[
      {
        id: `hero`,
        block: `hero`,
        headline: `Create a Give Account`
      },
      {
        id: `content`,
        block: `content`,
        content: `<p class="text-center">Giving is great. You should do it!</p>`
      },
      {
        id: `accordion-1`,
        block: `accordion`,
        title: `Can I do this thing?`,
        content: `<p class="mb-0">You sure can, pal.</p>`,
        addTopSpace: false,
        addBottomSpace: false
      },
      {
        id: `accordion-2`,
        block: `accordion`,
        title: `Can I do this thing?`,
        content: `<p class="mb-0">You sure can, pal.</p>`,
        addTopSpace: false,
        addBottomSpace: false
      },
      {
        id: `signup-form`,
        block: `create_account`
      }
    ]} />
  </Layout>
)

export default SignIn
