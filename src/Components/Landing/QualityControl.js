import React from "react";

class QualityControl extends React.Component {
  render() {
    return (
      <div className="header-space">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="services-text">Control</h1>
          </div>
        </div>
        <div className="quality">
          <div className="rating col">
            <span className="decorText">Rated</span>
            <span className="stars">+5 Stars</span>
            <span className="decorText">on TrustPilot</span>
          </div>
        </div>
      </div>
    );
  }
}
export default QualityControl;
