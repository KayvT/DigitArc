import React from "react";
import svgService from "../../Assets/imgs/Path 238.png";
class OurServices extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 services-text">OUR SERVICES</div>
          <div className="col-lg-6 service-layout">
            <img src={svgService} alt="svgServices" />
            <div class="row service-row">
              <div class="col">1 of 3</div>
              <div class="col">2 of 3</div>
              <div class="col">3 of 3</div>
            </div>
            <div class="row service-row">
              <div class="col">1 of 3</div>
              <div class="col">2 of 3</div>
              <div class="col">3 of 3</div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
  }
}
export default OurServices;
