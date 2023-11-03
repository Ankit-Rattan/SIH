import React from "react";
import OptionsList from "./OptionsList";
import bg from "../images/heroImg3.jpg";
import About from "./About";
import Contact from "./Contact";

function MainOne() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "left",
  };

  return (
    <main style={styles}>
      <div className="home">
        {/* <img src={bg} /> */}
        <div className="heading">
          <h1>Welcome to CourtKacheri</h1>
          <p>Where Justice Meet Proof</p>
        </div>
      </div>
      <OptionsList />
      <About />
      <Contact />
    </main>
  );
}
export default MainOne;
