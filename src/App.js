import React from "react";
import "./App.css";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import notFoundPage from "./Components/404";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        {/* <Route p</Router>ath="/Process" component={Process} /> */}
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/notfound" component={notFoundPage} />
      </Router>
      {/* </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
