import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Blocks from "./blocks"

export default ({ data }) => {
  const seo = data.datoCmsPage.seoMeta

  return (
    <Layout whiteNav={data.datoCmsPage.whiteNavigation}>
      <SEO
        pageTitle={data.datoCmsPage.title}
        title={seo && seo.title ? seo.title : data.datoCmsPage.title}
        description={seo && seo.description ? seo.description : null}
        image={seo && seo.image ? seo.image.url : null}
      />
      <Blocks content={data.datoCmsPage.content} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    datoCmsPage (id: {
      eq: $id
    }) {
      id
      title
      whiteNavigation
      pageSlug
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
          centerHeadline
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
        ... on DatoCmsLeadershipListing {
          id
          model {
            apiKey
          }
          people {
            id
            name
            slug
            headshot {
              fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            biography
            biographySummary
            title
            boardOrOfficers
          }
        }
        ... on DatoCmsOpportunityCollection {
          id
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
        ... on DatoCmsSchoolListingBlock {
          id
          model {
            apiKey
          }
          schools {
            id
            slug
            name
            schoolColor {
              hex
            }
            schoolUrl
            summary
            coverPhoto {
              fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            logo {
              fluid(maxWidth: 350, imgixParams: { fm: "png", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
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
        ... on DatoCmsContactForm {
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsLearningOutcomeList {
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsImageSeparator {
          id
          model {
            apiKey
          }
          image {
            fluid(maxWidth: 1400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
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
        ... on DatoCmsAccordion {
          id
          model {
            apiKey
          }
          content
          title
          addBottomSpace
          addTopSpace
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
