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

// import "@brainhubeu/react-carousel/lib/style.css";

// import Carousel, { slidesToScrollPlugin } from "@brainhubeu/react-carousel";
// import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
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
            // infinite={true}
            autoPlay={true}
            // slidesToShowPlugin
            slidesPerPage={5}
            centered={true}
            animationSpeed={80000}
            // infinite
          >
            <img src={THYicon} />
            <br></br>
            <img src={MERCEDESicon} />
            <br></br>

            <img src={SAPicon} />
            <br></br>

            <img src={ADVISicon} />
            <br></br>

            <img src={SIEMENicon} />
            <br></br>

            <img src={DHLicon} />
            <br></br>

            <img src={Tsystemsicon} />
            <br></br>

            <img src={AUDIicon} />
            <br></br>

            <img src={Computaicon} />
            <br></br>

            <img src={SAPicon} />
            <br></br>

            <img src={Tsystemsicon} />
            <br></br>
          </Carousel>
        </div>
      </>
    );
  }
}
export default Clients;
