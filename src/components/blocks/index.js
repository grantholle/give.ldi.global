import React from "react"
import Hero from "./hero"
import ImagesPlusContent from "./images-plus-content"
import Content from "./content"
import Cta from "./cta"
import ContentSlider from "./content-slider"
import Recommendation from "./recommendation"
import CenteredHeadline from "./centered-headline"
import TriangleContent from "./triangle-content"
import LeadershipListing from "./leadership-listing"
import Opportunities from "./opportunities"
import CrackledHeadline from "./crackled-headline-content"
import ImageContentBlock from "./image-content-blocks"
import ImageCarousel from "./image-carousel"
import SchoolListing from "./school-listing"
import ColumnContent from "./column-content"
import ContactForm from "./contact-form"
import FullWidthContent from "./full-width-content"
import BlockQuote from "./block-quote"
import Map from "./map"
import ImageSep from "./image-separator"
import Accordion from "./accordion"
import LearningOutcomes from "./learning-outcomes"

const blocks = {
  hero: Hero,
  images_plus_content: ImagesPlusContent,
  content: Content,
  button_action: Cta,
  content_slider: ContentSlider,
  recommendation: Recommendation,
  centered_headline: CenteredHeadline,
  triangle_content: TriangleContent,
  leadership_listing: LeadershipListing,
  opportunity_collection: Opportunities,
  crackle_header_plus_content: CrackledHeadline,
  image_columns_block: ImageContentBlock,
  image_carousel: ImageCarousel,
  school_listing_block: SchoolListing,
  column_content: ColumnContent,
  contact_form: ContactForm,
  full_width_content: FullWidthContent,
  block_quote: BlockQuote,
  map: Map,
  image_separator: ImageSep,
  accordion: Accordion,
  learning_outcome_list: LearningOutcomes,
}

const Blocks = ({ content, isHome }) => {
  if (!content) {
    return <div className="py-24">This block not implemented yet.</div>
  }

  return (
    <>
      {content.map(item => {
        if (!item.model) {
          return <></>
        }

        const Block = blocks[item.model.apiKey]

        if (Block) {
          return (
            <section key={item.id} className={`content-block block-${item.model.apiKey}`}>
              <Block data={item} isHome={isHome} />
            </section>
          )
        }

        return <div key={item.id}></div>
      })}
    </>
  )
}

export default Blocks
