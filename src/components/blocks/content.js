import React from "react"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  const Element = data.backgroundImage ?
    BackgroundImage : 'div'

  return (
    <Element
      className="bg-cover bg-no-repeat bg-bottom"
      fluid={data.backgroundImage ? data.backgroundImage.fluid : null}
      style={{
          WebkitBackfaceVisibility: 'hidden',
          backgroundColor: data.backgroundColor ?
            data.backgroundColor.hex : '#fff'
      }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="container"
      />
    </Element>
  )
}
