import React from "react"
import Img from "gatsby-image"

import RightAngle from "../../images/right-angle.svg"

const makePersonBlock = person => (
  <li
    key={person.id}
    className="flex w-full flex-wrap mb-20 pl-0"
  >
    <div className="w-full md:w-1/3 md:pr-14">
      {person.headshot ?
        <div
          className="rounded-full overflow-hidden mb-6 md:mb-0 mx-auto shadow"
          style={{
            maxWidth: '400px'
          }}
        >
          <Img
            className="block w-full"
            alt={person.name}
            fluid={person.headshot.fluid}
          />
        </div>
        :
        <div className="w-full h-32 bg-blue-500 opacity-50 mb-3 md:mb-0"></div>
      }
    </div>
    <div className="w-full md:w-2/3 flex justify-center flex-col text-center md:text-left">
      <h3 className="mb-3">{person.name}</h3>
      <div className="text-blue-500 text-sm mb-3">{person.title}</div>
      {person.boardOrOfficers !== 'board' &&
        <p className="text-left" style={{ marginBottom: 0 }}>{person.biographySummary}</p>
      }
    </div>
  </li>
)

export default class LeadershipListing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      boardExpanded: false,
      officersExpanded: true
    }

    this.toggleSlot = this.toggleSlot.bind(this)
  }

  toggleSlot (key) {
    this.setState({ [key]: !this.state[key] })
  }

  render () {
    return (
      <div className="bg-white">
        <div className="container">
          <div className="w-full py-4 border-b border-gray-400">
            <div
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => this.toggleSlot('boardExpanded')}
            >
              <div className={`text-3xl`}>Board of Directors</div>

              <div
                style={{
                  transition: `transform 250ms ease`,
                  transform: `rotate(${this.state.boardExpanded ? '90' : '0'}deg)`
                }}
              >
                <RightAngle />
              </div>
            </div>

            <ul className={`list-none mb-0 pl-0 pt-8 xl:px-20 ${this.state.boardExpanded ? 'block' : 'hidden'}`}>
              {this.props.data.people.filter(p => p.boardOrOfficers === 'board').map(makePersonBlock)}
            </ul>
          </div>

          <div className="w-full py-4 border-b border-gray-400 mb-16">
            <div
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => this.toggleSlot('officersExpanded')}
            >
              <div className={`text-3xl cursor-pointer`}>Officers</div>

              <div
                style={{
                  transition: `transform 250ms ease`,
                  transform: `rotate(${this.state.officersExpanded ? '90' : '0'}deg)`
                }}
              >
                <RightAngle />
              </div>
            </div>

            <ul className={`list-none mb-0 pt-8 pl-0 xl:px-20 ${this.state.officersExpanded ? 'block' : 'hidden'}`}>
              {this.props.data.people.filter(p => p.boardOrOfficers === 'officers').map(makePersonBlock)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
