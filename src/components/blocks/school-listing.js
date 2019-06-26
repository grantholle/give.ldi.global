import React from "react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Link } from "gatsby";

export default ({ data }) => {
  return (
    <div
      className="flex flex-wrap"
      style={{
        paddingTop: 0
      }}
    >
      {data.schools.map(school => (
        <article
          key={school.id}
          className="relative w-full md:w-1/2 flex items-center justify-center text-white px-8 school-tile"
          style={{
            backgroundColor: school.schoolColor.hex,
            height: `36rem`
          }}
        >
          <div className="absolute h-full w-full inset-0 opacity-20 z-0">
            <BackgroundImage className="w-full h-full" fluid={school.coverPhoto.fluid} />
          </div>
          <div className="text-center relative z-10">
            {school.logo &&
              <Img
                fluid={school.logo.fluid}
                className="mb-6 block mx-auto"
                style={{
                  width: '188px'
                }}
              />
            }
            <h3 className="text-white">{school.name}</h3>
            <p className="mx-auto lg:w-2/3 text-center">{school.summary}</p>
            {!school.schoolUrl &&
              <Link to={`/our-schools/${school.slug}`} className="btn white">Learn more</Link>
            }
            {school.schoolUrl &&
              <a href={school.schoolUrl} target="_blank" rel="noopener noreferrer" className="btn white">Learn more</a>
            }
          </div>
        </article>
      ))}
    </div>
  )
}
