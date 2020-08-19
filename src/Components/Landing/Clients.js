import React from "react";
import SIEMENicon from "../../Assets/clients/siemenslogo.png";
import MERCEDESicon from "../../Assets/clients/mercedeslogo.png";
import THYicon from "../../Assets/clients/thyssenlogo.png";
import Tsystemsicon from "../../Assets/clients/tsystemslogo.png";
import SAPicon from "../../Assets/clients/saplogo.png";
import ADVISicon from "../../Assets/clients/ADVIS_Logo.png";
import Computaicon from "../../Assets/clients/1200px-Computacenter_logo.svg.png";
import DHLicon from "../../Assets/clients/dhl-logo.png";
import AUDIicon from "../../Assets/clients/audi.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
class Clients extends React.Component {
  render() {
    return (
      <>
        <div
          className="row header-space"
          style={{ marginRight: 0, marginLeft: 0 }}
        >
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <h1 className="clients-text">HAPPY CLIENTS</h1>
            </div>
          </div>
        </div>
        <div className="header-space">
          <Carousel
            clickToChange
            arrows
            arrowLeft={
              <button>
                <ArrowBackIosIcon />
              </button>
            }
            // arrowLeftDisabled={}
            arrowRight={
              <button>
                <ArrowForwardIosIcon />
              </button>
            }
            addArrowClickHandler={true}
            // infinite={true}
            // autoPlay={true}
            slidesPerPage={5}
            // centered={true}
            // animationSpeed={80000}
          >
            <img src={THYicon} alt="THYicon" />
            <br></br>
            <img src={MERCEDESicon} alt="MERCEDESicon" />
            <br></br>

            <img src={ADVISicon} alt="ADVISicon" />
            <br></br>

            <img src={SIEMENicon} alt="SIEMENicon" />
            <br></br>

            <img src={DHLicon} alt="DHLicon" />
            <br></br>

            <img src={Tsystemsicon} alt="Tsystemsicon" />
            <br></br>

            <img src={AUDIicon} alt="AUDIicon" />
            <br></br>
            <img src={SAPicon} alt="SAPicon" />
            <br></br>

            <img src={Computaicon} alt="computaIcon" />
            <br></br>
          </Carousel>
        </div>
      </>
    );
  }
}
export default Clients;
