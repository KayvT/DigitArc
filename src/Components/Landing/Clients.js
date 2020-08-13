import React from "react";
import SIEMENicon from "../../Assets/clients/siemenslogo.png";
import MERCEDESicon from "../../Assets/clients/mercedeslogo.png";
import THYicon from "../../Assets/clients/thyssenlogo.png";
import Tsystemsicon from "../../Assets/clients/tsystemslogo.png";
import SAPicon from "../../Assets/clients/saplogo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <img id="clienticon" src={SIEMENicon} alt="siemen" />
          </div>
          <div>
            <img id="clienticon" src={THYicon} alt="siemen" />
          </div>
          <div>
            <img id="clienticon" src={Tsystemsicon} alt="siemen" />
          </div>
          <div>
            <img id="clienticon" src={SAPicon} alt="siemen" />
          </div>
          <div>
            <img id="clienticon" src={MERCEDESicon} alt="siemen" />
          </div>
        </Slider>
      </>
    );
  }
}

/* 

      <div>
        <div classNameName="row" style={{ marginRight: 0, marginLeft: 0 }}>
          <div classNameName="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div classNameName="w-100">
              <h1 classNameName="clients-text">HAPPY CLIENTS</h1>
            </div>
          </div>
        </div>
        <div classNameName="row clients" style={{ margin: 0 }}>
          <img id="clienticon" src={SIEMENicon} alt="siemen" />
          <img id="clienticon" src={MERCEDESicon} alt="siemen" />
          <img id="clienticon" src={THYicon} alt="siemen" />
        </div>
        <div classNameName="row clients" style={{ margin: 0 }}>
          <img id="clienticon" src={Tsystemsicon} alt="siemen" />
          <img id="clienticon" src={SAPicon} alt="siemen" />
        </div>
      </div>
      
      */
