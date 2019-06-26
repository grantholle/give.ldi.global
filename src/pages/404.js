import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/hero"
import Cta from "../components/blocks/cta"

const NotFoundPage = () => (
  <Layout whiteNav={true}>
    <SEO title="404: Not found" />

    <section className={`content-block block-hero`}>
      <Hero data={{
        headline: `Page Not Found`
      }} />
    </section>

    <section className={`content-block block-content`}>
      <div className="text-center">
        <div className="text-3xl max-w-xl mx-auto mb-8 pt-10">
          Sorry, this page doesn't exist.
        </div>
        <div className="mb-8">
          <Link className="btn" to="/">Go back home</Link>
        </div>
        <div className="mb-8">
          <Link className="btn" to="/our-schools">Discover our schools</Link>
        </div>
        <div>
          <Link className="btn" to="/opportunities">Opportunities</Link>
        </div>
      </div>
    </section>

    <section className={`content-block block-button_action`}>
      <Cta data={{
        buttonText: `Send a message`,
        buttonLink: 'contact',
        additionalText: `Get in Touch with Us`,
        addAirplaneGraphic: true
      }} />
    </section>
  </Layout>
)

export default NotFoundPage
