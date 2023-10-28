import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./Header";
import OptionsList from "./OptionsList";
import About from "./Pages/About";

// import {collection, getDocs, onSnapshot} from 'firebase/firestore';
// import {db} from './config/firebase'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* Option is under the MainOne section */}
      {/* <Option/> */}
      {/* <Footer /> */}
      <About/>
    </div>
  );
}

export default App;
