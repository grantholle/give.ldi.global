import React from "react"
import { Link } from "gatsby"
import ReactResizeDetector from "react-resize-detector"
import ImpactTheFuture from "../../images/impact.svg"

import BackgroundImage from "gatsby-background-image"

class Hero extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dimensions: {},
      videoPlayerVisible: false
    }

    this.toggleVideo = this.toggleVideo.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  toggleVideo () {
    this.setState({
      backgroundWidth: this.state.backgroundWidth,
      videoPlayerVisible: !this.state.videoPlayerVisible
    })
  }

  onResize () {
    const aspectRatio = 16 / 9
    const width = this.headerElement.clientWidth
    const height = this.headerElement.clientHeight
    const idealHeight = width / aspectRatio
    const idealWidth = height * aspectRatio
    const dimensions = {
      width: '100%',
      height: '100%'
    }

    // The video isn't tall enough
    // has bars on the top and bottom
    if (idealHeight > height) {
      dimensions.height = `${idealHeight}px`
      dimensions.top = `-${(idealHeight - height) / 2}px`
    }
    // The video isn't wide enough
    // has bars on the sides
    else {
      dimensions.width = `${idealWidth}px`
      dimensions.left = `-${(idealWidth - width) / 2}px`
    }


    this.setState({
      videoPlayerVisible: this.state.videoPlayerVisible,
      dimensions
    })
  }

  render () {
    const Shapes = this.props.data.popupVideo ?
      (
        <>
        <svg className="absolute inset-x-0 bottom-0 w-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1674 396"><path opacity=".6" fill="#005B94" d="M0 0l1674 312v84L0 396V0z"/></svg>
        <svg className="absolute right-0 bottom-0 w-1/6 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 987"><path fill="#003865" opacity="0.9" d="M425 0v987H0z"/></svg>
        </>
      )
      :
      (
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
      <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
        <div
          ref={element => { this.headerElement = element }}
          style={{ padding: 0 }}
        >
          <HeaderElement
            Tag="header"
            className={`hero-header ${(this.props.data.popupVideo || !!this.props.data.videoUrl || this.props.data.centerHeadline) ? 'has-video' : `pb-20 pt-${this.props.data.backgroundImage ? '128' : '40'}`}`}
            fluid={this.props.data.backgroundImage ? this.props.data.backgroundImage.fluid : null}
          >
            {!!this.props.data.videoUrl &&
              <div className="video-background">
                <div className="video-foreground">
                  <iframe
                    className="background-video"
                    src={this.props.data.videoUrl}
                    frameBorder="0"
                    width={this.state.backgroundWidth}
                    style={this.state.dimensions}
                  ></iframe>
                </div>
              </div>
            }

            {(!!this.props.data.popupVideo || !!this.props.data.videoUrl || this.props.data.centerHeadline) &&
              <div className={`absolute inset-0 z-0 ${this.state.videoPlayerVisible ? `bg-black z-50 opacity-90` : this.props.data.videoUrl ? `bg-gray-500 opacity-50` : `bg-blue-500 opacity-70`}`}></div>
            }

            <div className="z-30 relative px-6 max-w-2xl lg:max-w-4xl mx-auto">
              {!!this.props.data.headline && !this.props.isHome &&
                <h1 className={`leading-tight mb-${this.props.data.tagline || this.props.data.popupVideo ? '8' : '0'} text-4xl ${(this.props.data.popupVideo || this.props.data.centerHeadline) ? 'lg:text-5xl' : 'lg:text-4xl'}`}>{this.props.data.headline}</h1>
              }

              {this.props.isHome &&
                <div className="impact-wrapper">
                  <ImpactTheFuture />
                </div>
              }

              {!!this.props.data.tagline &&
                <div className="text-xl mb-8">{this.props.data.tagline}</div>
              }

              {!!this.props.data.buttonText && !!this.props.data.buttonUrl &&
                <div>
                  <Link
                    to={`/${this.props.data.buttonUrl.pageSlug}`}
                    className="btn white font-bold shadow-md"
                    dangerouslySetInnerHTML={{__html: this.props.data.buttonText}}
                  />
                </div>
              }

              {!!this.props.data.popupVideo &&
                <div className="py-8">
                  <button
                    className="text-white"
                    onClick={this.toggleVideo}
                  >
                    <svg version="1.1" className="mr-2 inline-block w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g><path fill="white" stroke="white" d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/><path fill="white" d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/></g></svg>
                    Watch Video
                  </button>
                </div>
              }
            </div>

            {!!this.props.data.popupVideo && this.state.videoPlayerVisible &&
              <div className="popup-video">
                <div className="w-full">
                  <button
                    className="w-full block text-right uppercase font-bold mb-2"
                    onClick={this.toggleVideo}
                  >
                    Close
                  </button>
                  <div className="popup-video-inner">
                    <iframe
                      src={this.props.data.popupVideo}
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            }

            {Shapes}
          </HeaderElement>
        </div>
      </ReactResizeDetector>
    )
  }
}

export default Hero
