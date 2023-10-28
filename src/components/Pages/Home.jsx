import React from "react";
import OptionsList from "../OptionsList";
import bg from "../images/heroImg3.jpg";

function MainOne() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };

  return (
    <main style={styles}>
      <div className="home">
        {/* <img src={bg} /> */}
        <div className="heading">
          <h1>Welcome to e-Court</h1>
          <p>Where Justice Meet Proof</p>
        </div>
      </div>
      <OptionsList />
    </main>
  );
}
export default MainOne;
