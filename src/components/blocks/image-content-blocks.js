import React from "react"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => (
  <div className="bg-white">
    <div className="flex flex-wrap bg-blue-500">
      {[1, 2, 3].map(index => (
        <div
          key={index}
          className="image-content-blocks-block"
        >
          <div
            className="image-content-content"
            dangerouslySetInnerHTML={{
              __html: data[`image${index}Content`]
            }}
          />
          <BackgroundImage
            fluid={data[`image${index}`].fluid}
            className="absolute inset-0 w-full h-full z-0"
            style={{
              opacity: .3
            }}
          />
        </div>
      ))}
    </div>
  </div>
)
