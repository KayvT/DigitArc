import React from "react";
import CareerHeaderImg from "../../Assets/imgs/CareerHeader/CareerHeader.svg";
class CareerHeader extends React.Component {
  render() {
    return (
      <div>
        <div
          className="row career"
          style={{ marginTop: 100, marginRight: 0, marginBottom: 100 }}
        >
          <div className="col-4 careerTitle">
            <span className="work">Work</span>
            <span className="with">With</span>
            <span className="us">US</span>
          </div>
          <div className="col-8">
            <img id="headerImg" src={CareerHeaderImg} alt="aboutheader" />
          </div>
        </div>
      </div>
    );
  }
}
export default CareerHeader;
