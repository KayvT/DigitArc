import React from "react";
import logo from "../Assets/imgs/Logo/WHITELOGOkatman 1.png";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <nav>
          <ul className="nav_links">
            <Link to="/">
              <li>Home</li>
            </Link>
            {/* <Link to="/process"> */}
            {/* <li>Process</li> */}
            {/* </Link> */}
            <Link to="/career">
              <li>Career</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
