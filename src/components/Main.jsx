import React from "react";
import {Navbar, Footer, Home, Parks} from './'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const Main = () => {
  return (
    <Router>
    <div id="main">
    <Navbar/>
    <Routes>
      <Route path="parks" element={<Parks/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
  );
};

export default Main;
