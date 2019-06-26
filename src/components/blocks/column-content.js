import React from "react"

const coords = {
  1: {
    p1: `34,31 358,84 308,173 96,166`,
    p2: `47,123 320,0 360,129 352,104`,
  },
  2: {
    p1: `20,135 95,31 371,71 247,173`,
    p2: `38,83 327,37 356,119 47,162`,
  },
  3: {
    p1: `37,85 339,29 378,172 43,142`,
    p2: `75,134 90,26 320,58 355,128`,
  }
}

export default ({ data }) => {
  return (
    <div className="bg-white">
      <div className="container">
        <h2 className="text-center mb-0">{data.header}</h2>
        <div className="mx-auto w-6 h-2 bg-blue-400 opacity-50 my-3 mb-16"></div>

        <div className="flex flex-wrap items-start justify-center -mx-4">
          {[1, 2, 3].filter(column => data[`column${column}Header`]).map(column => (
            <figure
              key={column}
              className="w-full lg:w-1/3 px-4 mb-8"
              style={{
                maxWidth: `25rem`
              }}
            >
              <div className="relative">
                <div className="flex items-center absolute w-full h-full">
                  <h3 className="text-white text-center mb-0 w-full pt-8">{data[`column${column}Header`]}</h3>
                </div>

                <svg className="w-full block" viewBox="0 0 390 198">
                  <defs>
                    <polygon id={`p1_${column}`} points={coords[column].p1}></polygon>
                    <polygon id={`p2_${column}`} points={coords[column].p2}></polygon>
                    <rect id={`p3_${column}`} y="37%" width="100%" height="62%" />

                    <clipPath id={`clip1_${column}`}>
                      <use href={`#p1_${column}`}></use>
                    </clipPath>
                    <clipPath id={`clip2_${column}`}>
                      <use href={`#p3_${column}`}></use>
                    </clipPath>
                  </defs>

                  <use className="fill-blue" href={`#p1_${column}`}></use>
                  <use className="fill-blue" href={`#p2_${column}`}></use>
                  <use className="fill-blue" href={`#p3_${column}`}></use>
                  <g fill="#002056">
                    <use href={`#p2_${column}`} clipPath={`url(#clip1_${column})`} />
                    <use href={`#p1_${column}`} clipPath={`url(#clip2_${column})`} />
                  </g>
                </svg>
              </div>

              <div className="bg-blue-100 p-4 text-sm">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[`column${column}Content`]
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
