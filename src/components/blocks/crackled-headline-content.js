import React from "react"

export default ({ data }) => (
  <div className="bg-white relative">
    <header className="container relative z-10">
      <div className={`flex flex-wrap items-center lg:max-w-4xl lg:mx-auto`}>
        {data.content &&
          <>
          <h2 className="lg:mb-0 lg:pr-20 lg:w-1/2 lg:text-center">{data.header}</h2>
          <p className="lg:text-right lg:pl-20 lg:w-1/2 text-gray-700">{data.content}</p>
          </>
        }
        {!data.content &&
          <h2 className="text-center w-full mb-0">{data.header}</h2>
        }
      </div>
    </header>
    <svg className="absolute w-full bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 294"><path fill="#005b94" opacity=".8" d="M306 294l351-82 943 67v15z"/><path fill="#005b94" opacity=".6" d="M1351 294l249-189v189z"/><path fill="rgba(0, 155, 255, 0.09)" d="M0 36L130 0l1250 294H0z"/></svg>
  </div>
)
