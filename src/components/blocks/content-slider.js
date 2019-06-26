import React from "react"
import ReactMarkdown from "react-markdown"

class ContentSlider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  switchPage (move) {
    let newIndex = this.state.currentIndex + move

    if (newIndex < 0) {
      newIndex = this.props.data.contentSource.length - 1
    } else if (newIndex > this.props.data.contentSource.length - 1) {
      newIndex = 0
    }

    this.setState({ currentIndex: newIndex })
  }

  render () {
    return (
      <div className={`content-slider ${this.props.isHome ? 'pt-0' : ''}`}>
        {this.props.data.contentSource.map((content, index) => (
          <div
            key={content.id}
            className={`w-full bg-center bg-cover ${this.state.currentIndex === index ? 'z-10 opacity-100' : 'opacity-0 z-0 absolute top-0'}`}
            style={{
              backgroundImage: `url('${content.picture.url}')`,
            }}
          >
            <div
              className={`w-full relative`}
            >
              <div className="absolute w-full h-full bg-blue-500 inset-0 z-0 opacity-80"></div>
              <div className="arrow-container">
                <div
                  className="arrow left-arrow"
                  onClick={() => this.switchPage(-1)}
                  ></div>
                <div
                  className="arrow right-arrow"
                  onClick={() => this.switchPage(1)}
                ></div>
              </div>

              <div className="container pt-24 pb-32 z-10 relative">
                <div className="xl:px-20">
                  <ReactMarkdown source={content.content} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ContentSlider
