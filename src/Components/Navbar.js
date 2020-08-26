import React from "react";
import logo from "../Assets/imgs/Logo/WHITELOGOkatman 1.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Nav">
        <div className="header">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          {/* <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <MenuIcon />
          </label> */}
          <nav>
            <ScrollLink
              className="scrolllink"
              activeClass="active"
              to="whatwedo"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              offset={200}
            >
              Services
            </ScrollLink>

            <ScrollLink
              className="scrolllink"
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              offset={-200}
            >
              Process
            </ScrollLink>
            <ScrollLink
              className="scrolllink"
              activeClass="active"
              to="quality"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              offset={-200}
            >
              Quality
            </ScrollLink>
            <ScrollLink
              className="scrolllink"
              activeClass="active"
              to="clients"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              offset={-200}
            >
              Clients
            </ScrollLink>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
