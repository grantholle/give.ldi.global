import React from "react"
import Hero from "./hero"
import ImagesPlusContent from "./images-plus-content"
import Content from "./content"
import Cta from "./cta"
import CenteredHeadline from "./centered-headline"
import TriangleContent from "./triangle-content"
import CrackledHeadline from "./crackled-headline-content"
import ImageContentBlock from "./image-content-blocks"
import ColumnContent from "./column-content"
import FullWidthContent from "./full-width-content"
import ImageSep from "./image-separator"
import Accordion from "./accordion"
import SignIn from "./signin-form"
import CreateAccount from "./create-account-form"
import Donate from "./donate-form"

const blocks = {
  hero: Hero,
  images_plus_content: ImagesPlusContent,
  content: Content,
  button_action: Cta,
  centered_headline: CenteredHeadline,
  triangle_content: TriangleContent,
  crackle_header_plus_content: CrackledHeadline,
  image_columns_block: ImageContentBlock,
  column_content: ColumnContent,
  full_width_content: FullWidthContent,
  image_separator: ImageSep,
  accordion: Accordion,
  signin: SignIn,
  create_account: CreateAccount,
  donate: Donate,
}

const Blocks = ({ content }) => {
  if (!content) {
    return <div className="py-24">This block not implemented yet.</div>
  }

  return (
    <>
      {content.map(item => {
        const Block = blocks[item.block]

        if (Block) {
          return (
            <section key={item.id} className={`content-block block-${item.block}`}>
              <Block data={item} />
            </section>
          )
        }

        return <div key={item.id}></div>
      })}
    </>
  )
}

export default Blocks
