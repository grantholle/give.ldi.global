import React from "react"
import Opening from "../../images/opening.svg"
import Closing from "../../images/closing.svg"

export default ({ data }) => (
  <div className="container">
    <div className="flex flex-wrap">
      <div className="w-12">
        <Opening />
      </div>
      <div className="flex-1 pl-8">
        <div className="h-1 w-full bg-blue-500 opacity-25 rounded-full"></div>
      </div>
    </div>

    <div className="w-full">
      <blockquote
        className={`max-w-3xl mx-auto text-xl lg:text-3xl py-16 px-4 lg:px-10 lg:px-0 text-blue-600 italic leading-relaxed`}
      >
        {data.quote}

        {data.name &&
          <div className="text-right text-blue-700 not-italic font-bold pt-8">&mdash; {data.name}</div>
        }
      </blockquote>
    </div>

    <div className="flex flex-wrap">
      <div className="flex-1 pr-8 h-1 self-end">
        <div className="h-full w-full bg-blue-500 opacity-25 rounded-full"></div>
      </div>
      <div className="w-12">
        <Closing />
      </div>
    </div>
  </div>
)
