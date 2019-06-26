import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  return (
    <div>
      <div className={`container flex flex-wrap items-center ${data.imagesOnRight ? 'images-right lg:flex-row-reverse' : ''}`}>
        <div className={`w-full lg:w-1/2 flex folded-images`}>
          {data.images.map(image => (
            <div className="folded-image-wrapper" key={image.id}>
              <BackgroundImage
                className="folded-image"
                fluid={image.fluid}
              >
                <div className="blue-overlay"></div>
              </BackgroundImage>
            </div>
          ))}
        </div>
        <div className={`w-full lg:w-1/2 lg:${data.imagesOnRight ? 'pr-16' : 'pl-16'} xl:${data.imagesOnRight ? 'pr-24' : 'pl-24'}`}>
          <h2>{data.title}</h2>
          <ReactMarkdown source={data.content}/>

          {data.buttonText && data.buttonLocation &&
            <Link
              className="btn"
              to={`/${data.buttonLocation.pageSlug}`}
              dangerouslySetInnerHTML={{
                __html: data.buttonText
              }}
            />
          }
        </div>
      </div>
    </div>
  )
}
