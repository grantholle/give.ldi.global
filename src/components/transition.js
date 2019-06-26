import React from "react"
import posed, { PoseGroup } from "react-pose"

const timeout = 100

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        filter: 'blur(0px)',
        // transform: 'translateX(0)',
        delay: timeout,
        delayChildren: timeout
      },
      exit: {
        opacity: 0,
        filter: 'blur(20px)',
        // transform: 'translateX(20px)'
      }
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
