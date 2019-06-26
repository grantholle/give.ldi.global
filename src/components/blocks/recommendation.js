import React from "react"
import ReactMarkdown from "react-markdown"

export default ({ data }) => (
  <div className="relative">
    <figure className="flex items-center">
      <div
        className="w-1/2"
        style={{
          marginRight: '-7%'
        }}
      >
        <img className="block w-full" src={data.headshot.url} alt="Testimonial" />
      </div>
      <div
        className="relative z-10"
        style={{
          width: '57%'
        }}
      >
        <div className="dynamic-padding text-center bg-blue-100 py-24 xl:pl-24 px-8 relative">
          <ReactMarkdown source={data.content} />
          {data.signature &&
            <img className="inline-block mb-4" src={data.signature.url} alt={data.name} />
          }
          <div className="font-bold">
            – {data.name}
          </div>
        </div>
      </div>
    </figure>
  </div>
)
