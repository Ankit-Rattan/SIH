import React from "react";
import Navbar from "./navbar";
import Mainone from "./mainOne";
import Option from "./option";
import Section from "./section";
import Footer from "./footer";


function App(){
    return(
        <div>
        <Navbar/>
        <Mainone/>
        {/* Option is under the MainOne section */}
        {/* <Option/> */}
        <Section/>
        <Footer/>
        </div>
    );
}

export default App;