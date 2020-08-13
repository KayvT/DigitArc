import React from "react";
import ControlSVG from "../../Assets/imgs/Decor SVGS/ControlBG.png";
class QualityControl extends React.Component {
  render() {
    return (
      <div className="header-space">
        <div class="row" style={{ margin: 0 }}>
          <div class="col-4 d-flex flex-column justify-content-center align-items-center">
            {/* <div className="col-lg-6 "> */}
            <div className="w-75">
              <h1 className="services-text">Control</h1>
              {/* </div> */}
            </div>
            <div className="ratingContainer">
              <div className="rating">
                <span className="decorText">Rated</span>
                <span className="stars">+5 Stars</span>
                <span className="decorText">on TrustPilot</span>
              </div>
            </div>
          </div>
          <div class="col-8">
            <img src={ControlSVG} alt="controlsvg" className="controlsvg" />
          </div>
        </div>
      </div>
    );
  }
}
export default QualityControl;
