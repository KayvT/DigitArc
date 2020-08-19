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
import impressum from "./Components/Impressum/impressum";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/notfound" component={notFoundPage} />
          <Route path="/impressum" component={impressum} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
