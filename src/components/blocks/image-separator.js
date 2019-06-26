import React from "react"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => (
  <div>
    <div className="h-64 lg:h-128">
      <BackgroundImage
        className="image-sep h-full"
        fluid={data.image.fluid}
      />
    </div>
  </div>
)
