import React from "react";
import "./App.css";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";

import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Route path="/Process" component={Process} /> */}
        {/* <Route path="/Career" component={Career} /> */}
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
