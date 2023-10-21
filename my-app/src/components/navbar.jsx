import React from "react";
import lionLogo from "./images/lion-sym.png";
import digiLogo from "./images/DigitalInd.png";

function Navbar(){
    return(
        <div>

        <nav>
            <h1>E-Court</h1>
            <div className="rightIcon">
            <div className="digitalIndImg">
                <img src={digiLogo} alt="lionIcon"/>
            </div>
            <div className="lionImg">
                <img src={lionLogo} alt="lionIcon"/>
            </div>
            </div>
        </nav>
        <marquee>
            <p>This line is for the latest update regular in justice firm.  This line is for the latest update regular in justice firm</p>
        </marquee>
        </div>
    );
}

export default Navbar;