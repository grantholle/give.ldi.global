import React from "react"
import AliceCarousel from "react-alice-carousel"
import BackgroundImage from "gatsby-background-image"

export default class Gallery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      },
      galleryItems: this.galleryItems(),
    }

  }

  galleryItems() {
    return this.props.data.images.map(image => (
      <BackgroundImage
        style={{
          height: '27rem'
        }}
        fluid={image.fluid}
      />
    ))
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - 1

    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const { galleryItems: { length }} = this.state

    let currentIndex = this.state.currentIndex + 1

    if (currentIndex > length) {
      currentIndex = length
    }

    this.setState({ currentIndex })
  }

  handleOnSlideChange = (event) => {
    this.setState({ currentIndex: event.item })
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state

    return (
      <div
        className="bg-white"
        style={{
          paddingTop: 0
        }}
      >
        <div className="relative">
          <AliceCarousel
            items={galleryItems}
            slideToIndex={currentIndex}
            responsive={responsive}
            buttonsDisabled={true}
            dotsDisabled={true}
            onInitialized={this.handleOnSlideChange}
            onSlideChanged={this.handleOnSlideChange}
            onResized={this.handleOnSlideChange}
          />

          <button className="page-arrow left-arrow" onClick={this.slidePrevPage}><div></div></button>
          <button className="page-arrow right-arrow" onClick={this.slideNextPage}><div></div></button>
        </div>
      </div>
    )
  }
}
