import React from "react";
import HeaderImg from "../../Assets/imgs/AboutHeader/AboutHeaderImg.svg";
class AboutHeader extends React.Component {
  render() {
    return (
      <div>
        <div
          className="row aboutrow"
          style={{ margin: 0, marginBottom: "150px" }}
        >
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
