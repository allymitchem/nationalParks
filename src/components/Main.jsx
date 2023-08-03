import React from "react";
import {Navbar, Footer, Home} from './'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const Main = () => {
  return (
    <Router>
    <div id="main">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
  );
};

export default Main;
