import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Header from "./Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// import {collection, getDocs, onSnapshot} from 'firebase/firestore';
// import {db} from './config/firebase'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar className = "my-36" />
      {/* Option is under the MainOne section */}
      {/* <Option/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
