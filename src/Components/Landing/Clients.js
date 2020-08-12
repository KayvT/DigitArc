import React from "react";
import SIEMENicon from "../../Assets/clients/siemenslogo.png";
import MERCEDESicon from "../../Assets/clients/mercedeslogo.png";
import THYicon from "../../Assets/clients/thyssenlogo.png";
import Tsystemsicon from "../../Assets/clients/tsystemslogo.png";
import SAPicon from "../../Assets/clients/saplogo.png";

class OurClients extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <h1 className="clients-text">HAPPY CLIENTS</h1>
            </div>
          </div>
        </div>
        <div className="row clients" style={{ margin: 0 }}>
          <img id="clienticon" src={SIEMENicon} alt="siemen" />
          <img id="clienticon" src={MERCEDESicon} alt="siemen" />
          <img id="clienticon" src={THYicon} alt="siemen" />
        </div>
        <div className="row clients" style={{ margin: 0 }}>
          <img id="clienticon" src={Tsystemsicon} alt="siemen" />
          <img id="clienticon" src={SAPicon} alt="siemen" />
        </div>
      </div>
    );
  }
}
export default OurClients;
