import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <div className="leftNav"></div>
          <div className="rightNav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/signin">SignIn</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
