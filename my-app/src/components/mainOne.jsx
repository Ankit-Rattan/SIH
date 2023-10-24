import React from "react";
import bg from "./images/heroImg1.jpg";
import Option from './option'

    
    
function MainOne(){
    const myStyle = {
      
      backgroundImage:`url(${bg})`,
      backgroundPosition: `right`,
      backgroundRepeat : `no-repeat`,
      backgroundSize : `cover`,
    };
    return(
        <div style={myStyle} >

        <div  className="MainOne">
            <h1>Welcome to e-Court</h1>
            <p>Where Justice Meet Proof</p>
        </div>
            <Option/>
        </div>
    );
}
export default MainOne;