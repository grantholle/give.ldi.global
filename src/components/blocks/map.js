import React from "react"
import Map from "../../images/map.svg"
import CrackleTop from "../../images/map-crackle-top.svg"
import CrackleBottom from "../../images/map-crackle-bottom.svg"

export default ({ data }) => (
  <>
  <CrackleTop />
  <div
    className="px-2 relative"
    style={{
      paddingTop: 0,
      paddingBottom: 0
    }}
  >
    <Map />

    <div className="tooltip us">
      <div className="font-bold">U.S. Office, LDi Headquarters</div>
      Mobilization and Recruitment Team
    </div>

    <div className="tooltip china">
      <div className="font-bold">China</div>
      <div>iSC: International Schools Consortium</div>
      <div>Established 1986</div>
    </div>

    <div className="tooltip top uae">
      <div className="font-bold">UAE</div>
      <div>The WellSpring School, Ras al Khaimah</div>
      <div>Established 2015</div>
    </div>
  </div>

  <CrackleBottom />
  </>
)
