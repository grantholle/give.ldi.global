import React from "react"
import LightTriangle from "../../images/light-triangle.svg"
import SmallTriangle from "../../images/small-triangle.svg"

export default ({ data }) => (
  <div className="bg-white">
    <div className="container lg:pt-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-center mb-32 mb-0 inline-block relative">
            {data.title}
            <SmallTriangle className="small-triangle" />
          </h2>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div
            className="relative z-10"
            dangerouslySetInnerHTML={{
              __html: data.content
            }}
          />
          <LightTriangle className="light-triangle" />
        </div>
      </div>
    </div>
  </div>
)
