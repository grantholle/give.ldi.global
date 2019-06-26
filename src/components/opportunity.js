import React from "react"
import ReactMarkdown from "react-markdown"

import Layout from "./layout"
import SEO from "./seo"
import Hero from "./blocks/hero"
import Cta from "./blocks/cta"

const Page = ({ pageContext }) => (
  <Layout whiteNav={true}>
    <SEO
      title={`${pageContext.title} | Opportunites`}
      description={`Are you a ${pageContext.title}? Come work for us!`}
    />

    <section className={`content-block block-hero`}>
      <Hero data={{
        headline: `Opportunities`
      }} />
    </section>

    <section className={`content-block block-hero`}>
      <div className="bg-white">
        <div className="container flex flex-wrap pt-24">
          <div className="w-full">
            <h2 className="mb-4">{pageContext.title}</h2>
            <div className="mb-8 text-blue-500 text-xl font-bold">
              {pageContext.department.join(', ')} &mdash; {pageContext.regions.join(', ')}
            </div>
          </div>

          <div className="w-full lg:w-2/3 lg:pr-10 mb-12 lg:mb-0">
            <ReactMarkdown source={pageContext.description} />
          </div>

          <div className="w-full text-sm lg:w-1/3 lg:pl-10">
            <a className="block btn text-xl mb-8" href="https://www.ldius.org/onlineapp/interest.php" target="_blank" rel="noopener noreferrer">Apply now</a>
            <div
              dangerouslySetInnerHTML={{
                __html: pageContext.entity.sidebarDescription
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="content-block block-button_action">
      <Cta data={{
        addAirplaneGraphic: true,
        additionalText: 'Get in Touch with Us',
        buttonLink: {
          pageSlug: 'contact'
        },
        buttonText: 'Send a message'
      }} />
    </section>
  </Layout>
)

export default Page
