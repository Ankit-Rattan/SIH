import React from "react";
import lionLogo from "./images/lion-sym.png";
import digiLogo from "./images/DigitalInd.png";

export default function Header() {
  return (
    <>
      <header>
      <h1>E-Court</h1>

      <div className="rightIcon">
          <img src={digiLogo} alt="lionIcon" className="digitalIndImg" />
          <img src={lionLogo} alt="lionIcon" className="lionImg"/>
      </div>
      
    </header>
    
    <marquee>
    <p>
      This line is for the latest update regular in justice firm. This line
      is for the latest update regular in justice firm
    </p>
  </marquee>
    </>
  );
}
