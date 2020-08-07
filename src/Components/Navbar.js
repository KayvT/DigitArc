import React from "react";
import logo from "../Assets/Logo/logo.png";
// import "./Styles/style.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Process</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        {/* <a class="cta" href="#"> */}
        {/* <button classname="btn">Contact Us</button> */}
        {/* </a> */}
      </div>
    );
  }
}
export default Navbar;
