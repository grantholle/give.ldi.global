import React from "react"
import Planes from "../../components/planes"

import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  const Element = data.backgroundImage ?
    BackgroundImage : 'div'

  return (
    <Element
      className={`cta relative bg-white bg-cover bg-center ${data.addAirplaneGraphic ? 'has-airplanes' : 'no-airplanes'}`}
      fluid={data.backgroundImage && !data.addAirplaneGraphic ? data.backgroundImage.fluid : null}
    >
      {data.addAirplaneGraphic &&
        <div className="absolute bottom-0 z-0 w-full">
          <svg className="w-1/3 absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 285"><path fill="rgba(0, 88, 155, 0.09)" d="M0 0l300 47 280 238H0z"/></svg>
          <svg className="w-full absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1612 226"><path fill="rgba(0, 88, 155, 0.09)" d="M0 0l1612 189v37H0z"/></svg>
          <svg className="w-2/5 absolute right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588 277"><path fill="rgba(0, 88, 155, 0.09)" d="M0 277L588 0v277z"/></svg>
          <svg className="w-full absolute bottom-0" style={{transform: 'translateY(50%)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1612 128"><path fill="#005b94" d="M0 60L620 0l992 55v15l-724 58L0 96z"/></svg>
        </div>
      }

      <div className="h-full w-full flex items-center justify-center text-center relative">
        <div className="px-8">
          {data.addAirplaneGraphic &&
            <Planes/>
          }
          {data.additionalText &&
            <div className="text-3xl text-blue-500 mb-4">{data.additionalText}</div>
          }
          {data.buttonLink &&
            <a className="btn shadow-md" href={data.buttonLink}>{data.buttonText}</a>
          }
        </div>
      </div>
    </Element>
  )
}