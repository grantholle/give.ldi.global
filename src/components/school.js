import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Blocks from "./blocks"

export default ({ data }) => (
  <Layout whiteNav={true}>
    <SEO
      title={data.datoCmsSchool.seoMeta ? data.datoCmsSchool.seoMeta.title : data.datoCmsSchool.name}
      description={data.datoCmsSchool.seoMeta ? data.datoCmsSchool.seoMeta.description : data.datoCmsSchool.summary}
    />
    <Blocks content={data.datoCmsSchool.content} />
  </Layout>
)

export const query = graphql`
  query($id: String!) {
    datoCmsSchool (id: {
      eq: $id
    }) {
      id
      name
      schoolColor {
        hex
      }
      slug
      summary
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
            id
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          imagesOnRight
          buttonText
          buttonLocation {
            pageSlug
          }
        }
        ... on DatoCmsTriangleContent {
          id
          title
          content
          model {
            apiKey
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
                fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
        ... on DatoCmsCenteredHeadline {
          id
          headline
          model {
            apiKey
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
        ... on DatoCmsImageCarousel {
          id
          model {
            apiKey
          }
          images {
            id
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsImageColumnsBlock {
          id
          model {
            apiKey
          }
          image1 {
            id
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          image1Content
          image2 {
            id
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          image2Content
          image3 {
            id
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          image3Content
        }
        ... on DatoCmsColumnContent {
          id
          model {
            apiKey
          }
          header
          column1Header
          column1Content
          column2Header
          column2Content
          column3Header
          column3Content
        }
        ... on DatoCmsFullWidthContent {
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
