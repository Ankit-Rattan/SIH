import React from "react";
import bg from "./images/heroImg2.jpg";


    
    
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
        </div>
    );
}
export default MainOne;