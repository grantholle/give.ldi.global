import React from "react"
import AnimateHeight from "react-animate-height"

class ContentSlider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand () {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return (
      <div
        className={`${this.state.expanded ? `accordion-expanded` : ``} container ${this.props.data.addTopSpace ? 'add-top-p' : ''} ${this.props.data.addBottomSpace ? 'add-bottom-p' : ''}`}
      >
        <div
          className="accordion-title"
          onClick={this.toggleExpand}
        >
          <div className="flex-1 pr-2">
            {this.props.data.title}
          </div>

          <div className="plus-sign">
            <div className="horz"></div>
            <div className="vert"></div>
          </div>
        </div>
        <AnimateHeight
          className="accordion-content"
          height={this.state.expanded ? 'auto' : 0}
        >
          <div
            className="py-8 px-4 lg:px-8 bg-blue-100"
            dangerouslySetInnerHTML={{
              __html: this.props.data.content
            }}
          ></div>
        </AnimateHeight>
      </div>
    )
  }
}

export default ContentSlider
