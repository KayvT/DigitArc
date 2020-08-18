import React from "react";
import About from "../About";
import HeaderImg from "../../Assets/imgs/AboutHeader/AboutHeaderImg.png";
class AboutHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{ margin: 0, marginBottom: "150px" }}>
          <div className="col-4 aboutTitle">
            <span className="about">About</span>
            <span className="us">US</span>
          </div>
          <div className="col-8">
            <img src={HeaderImg} alt="aboutheader" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutHeader;
