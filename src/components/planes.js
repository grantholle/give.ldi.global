import React from "react"
import Left from "../images/planes-left.svg"
import Right from "../images/planes-right.svg"

export default () => (
  <div className="flex flex-col sm:flex-row pb-8 justify-between w-full sm:w-64 mx-auto">
    <div className="plane-left">
      <Right className="w-full"/>
    </div>
    <div className="plane-right">
      <Left className="w-full"/>
    </div>
  </div>
)
