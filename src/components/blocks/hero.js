import React from "react"

import BackgroundImage from "gatsby-background-image"

class Hero extends React.Component {
  render () {
    const Shapes = (
        <>
        <svg className="absolute left-0 bottom-0 w-2/5 xl:w-1/3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#005b94" opacity=".6" d="M0 0l100 100H0z"/></svg>
        <svg className="absolute bottom-0 right-0 w-1/2 xl:w-1/3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119 69"><path fill="#005b94" opacity=".6" d="M119 0L0 69h119z"/></svg>
        <div className="full-blue">
          <svg preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 208"><path fill="#005b94" opacity=".8" d="M0 208v-40L309 0l1041 25 250 168v15z"/></svg>
        </div>
        </>
      )

    const HeaderElement = this.props.data.backgroundImage ?
      BackgroundImage : 'header'

    return (
      <div style={{
        padding: 0
      }}>
        <HeaderElement
          // Tag="header"
          className={`hero-header ${this.props.data.centerHeadline ? 'has-video' : `pb-20 pt-${this.props.data.backgroundImage ? '128' : '40'}`}`}
          fluid={this.props.data.backgroundImage ? this.props.data.backgroundImage.fluid : null}
        >
          {this.props.data.centerHeadline &&
            <div className={`absolute inset-0 z-0 ${this.props.data.grayBg ? `bg-gray-500 opacity-50` : `bg-blue-500 opacity-70`}`}></div>
          }

          <div className="z-30 relative px-6 max-w-2xl lg:max-w-4xl mx-auto">
            <h1
              className={`leading-tight mb-${this.props.data.tagline ? '8' : '0'} text-4xl ${this.props.data.centerHeadline ? 'lg:text-5xl' : 'lg:text-4xl'}`}>
              {this.props.data.headline}
            </h1>

            {!!this.props.data.tagline &&
              <div className="text-xl mb-8">{this.props.data.tagline}</div>
            }

          </div>

          {Shapes}
        </HeaderElement>
      </div>
    )
  }
}

export default Hero
