import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blocks from "../components/blocks"

const IndexPage = ({ data }) => (
  <Layout whiteNav={true}>
    <SEO
      pageTitle="Home"
      title={data.datoCmsHomePage.seoMeta.title}
      description={data.datoCmsHomePage.seoMeta.description}
      image={data.datoCmsHomePage.seoMeta.image ? data.datoCmsHomePage.seoMeta.image.url : null}
    />

    <div className="homepage">
      <Blocks content={data.datoCmsHomePage.content} isHome={true} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    datoCmsHomePage {
      id
      title
      whiteNavigation
      content {
        ... on DatoCmsContent {
          id
          model {
            apiKey
          }
          content
          backgroundImage {
            fluid(maxWidth: 1400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          backgroundColor {
            hex
            alpha
          }
        }
        ... on DatoCmsButtonAction {
          id
          buttonText
          buttonLink {
            pageSlug
          }
          additionalText
          backgroundImage {
            fluid(maxWidth: 1400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          addAirplaneGraphic
          model {
            apiKey
          }
        }
        ... on DatoCmsHero {
          id
          model {
            apiKey
          }
          headline
          videoUrl
          backgroundImage {
            fluid(maxWidth: 1400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          buttonText
          buttonUrl {
            pageSlug
          }
          tagline
          popupVideo
        }
        ... on DatoCmsImagesPlusContent {
          id
          model {
            apiKey
          }
          title
          content
          images {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            id
          }
          imagesOnRight
          buttonText
          buttonLocation {
            pageSlug
          }
        }
        ... on DatoCmsContentSlider {
          id
          model {
            apiKey
          }
          contentSource {
            ... on DatoCmsTestimonial {
              id
              model {
                apiKey
              }
              content
              picture {
                url
              }
            }
          }
        }
        ... on DatoCmsCrackleHeaderPlusContent {
          id
          model {
            apiKey
          }
          header
          content
        }
        ... on DatoCmsBlockQuote {
          id
          model {
            apiKey
          }
          quote
          name
        }
        ... on DatoCmsMap {
          id
          model {
            apiKey
          }
        }
      }
      seoMeta {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
  }
`

export default IndexPage
