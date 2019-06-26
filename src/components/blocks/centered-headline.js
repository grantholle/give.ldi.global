import React from "react"

export default ({ data }) => (
  <div
    className="bg-white"
    style={{
      paddingBottom: `3rem`
    }}
  >
    <header className="container">
      <h2 className="text-center mb-0">{data.headline}</h2>
      <div className="mx-auto w-6 h-2 bg-blue-400 opacity-50 my-3"></div>
    </header>
  </div>
)
