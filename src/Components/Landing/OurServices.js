import React from "react";
import svgService from "../../Assets/imgs/Decor SVGS/OurServices.svg";
import arcIcon from "../../Assets/imgs/OurServiceIcons/Architecture96px.png";
import devIcon from "../../Assets/imgs/OurServiceIcons/dev128px.png";
import optIcon from "../../Assets/imgs/OurServiceIcons/optimization128px.png";
import workIcon from "../../Assets/imgs/OurServiceIcons/workflow100px.png";
import iotIcon from "../../Assets/imgs/OurServiceIcons/iot64px.png";
import cloudIcon from "../../Assets/imgs/OurServiceIcons/cloud128px.png";

class OurServices extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header-space row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="w-75">
              <h1 className="services-text">OUR SERVICES</h1>
              <p className="service-subText">
                Digital Architects LLC. Is an IT solutions company leveraging
                latest technologies and experience to serve better IT support
                for better business outcomes. Digital Architects LLC. Is an IT
                solutions company leveraging latest technologies and experience
                to serve better IT support for better business outcomes. Digital
                Architects LLC. Is an IT solutions company leveraging latest
                technologies and experience to serve better IT support for
                better business outcomes.
              </p>
              <button className="btnText">GET STARTED!</button>
            </div>
          </div>
          <div className="col-lg-6 service-layout d-flex justify-content-center align-items-center">
            <img
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={svgService}
              alt="svgServices"
            />
            <div
              className="d-flex w-75 justify-content-center align-items-center"
              style={{ gap: "15px", flexWrap: "wrap" }}
            >
              <div className="card-body-custom shadow index">
                <div className="content">
                  <img className="tableIcon" src={arcIcon} alt="arcIcon" />
                  <h3 className="cardText">Architecture</h3>
                </div>
              </div>
              <div className="card-body-custom white shadow index">
                <div className="content">
                  <img className="tableIcon" src={devIcon} alt="devIcon" />
                  <h3 className="cardText-blue">Development</h3>
                </div>
              </div>
              <div className="card-body-custom shadow index">
                <div className="content">
                  <img className="tableIcon" src={optIcon} alt="optIcon" />
                  <h3 className="cardText">Optimization</h3>
                </div>
              </div>
              <div className="card-body-custom white shadow index">
                {" "}
                <div className="content">
                  <img className="tableIcon" src={workIcon} alt="workIcon" />
                  <h3 className="cardText-blue">Workflow</h3>
                </div>
              </div>
              <div className="card-body-custom shadow index">
                <div className="content">
                  <img className="tableIcon" src={iotIcon} alt="iotIcon" />
                  <h3 className="cardText">IOT</h3>
                </div>
              </div>
              <div className="card-body-custom white shadow index">
                <div className="content">
                  <img className="tableIcon" src={cloudIcon} alt="cloudIcon" />
                  <h3 className="cardText-blue">Cloud</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OurServices;
