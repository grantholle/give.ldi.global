import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default ({ data, blue }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "ldi-logo.png" }) {
          childImageSharp {
            fixed(width: 245, height: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
    )}
  />
)
