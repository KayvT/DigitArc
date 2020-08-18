import React from "react";
import logo from "../Assets/imgs/Logo/WHITELOGOkatman 1.png";
// import "./Styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="header">
          <img className="logo" src={logo} alt="logo" />
          <nav>
            <ul className="nav_links">
              <li>
                {/* <a href="#">Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <a href="#">Process</a> */}
                <Link to="/process">Process</Link>
              </li>
              <li>
                {/* <a href="#">Career</a> */}
                <Link to="/career">Career</Link>
              </li>
              <li>
                {/* <a href="#">About</a> */}
                <Link to="/about">About</Link>
              </li>
            </ul>
            {/* <button className="btnText">Contact Us</button> */}
          </nav>
          {/* <a class="cta" href="#"> */}
          {/* <button classname="btn">Contact Us</button> */}
          {/* </a> */}
        </div>
      </Router>
    );
  }
}
export default Navbar;
