import React from "react";
import "./App.css";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Header from "./Components/Landing/Header";
// import OurServices from "./Components/Landing/OurServices";
// import WhatWeDo from "./Components/Landing/WhatWeDo";
// import Process from "./Components/Landing/Process";
// import QualityControl from "./Components/Landing/QualityControl";
// import Clients from "./Components/Landing/Clients";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* <Route path="/Process" component={Process} /> */}
        {/* <Route path="/Career" component={Career} /> */}
        <Route path="/About" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
