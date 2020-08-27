import React from "react";
import ContractIcon from "../../Assets/imgs/Process Icons/Contact200px.png";
import DevelopIcon from "../../Assets/imgs/Process Icons/develop240px.png";
import RequirmentsIcon from "../../Assets/imgs/Process Icons/requirments240px.png";
import SupportIcon from "../../Assets/imgs/Process Icons/support240px.png";

class Process extends React.Component {
  render() {
    return (
      <>
        <div
          id="process"
          className="col-lg-6 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="w-75">
            <h1 className="services-text">Process</h1>
          </div>
        </div>
        <div className="process header-space row" style={{ margin: 0 }}>
          <div className="col">
            <div>
              <img id="icon" src={RequirmentsIcon} alt="requirmentsIcon"></img>
              <h3>Requirements</h3>
            </div>
            <p>
              State your business' requirements for digitalization. At Digitarc
              LLC., we consider every single detail to fulfill the requirements
              of the software on our behalf. After carefully inspecting the
              requirements, it gets possible to contemplate how the proceeding
              process will be.
            </p>
          </div>
          <div className="col">
            <div>
              <img id="icon" src={ContractIcon} alt="contractIcon"></img>
              <h3>Contract</h3>
            </div>
            <p>
              State your business' requirements for digitalization. At Digitarc
              LLC., we consider every single detail to fulfill the requirements
              of the software on our behalf. After carefully inspecting the
              requirements, it gets possible to contemplate how the proceeding
              process will be.
            </p>
          </div>
          <div className="col">
            <div>
              <img id="icon" src={DevelopIcon} alt="developIcon"></img>
              <h3>Development</h3>
            </div>
            <p>
              State your business' requirements for digitalization. At Digitarc
              LLC., we consider every single detail to fulfill the requirements
              of the software on our behalf. After carefully inspecting the
              requirements, it gets possible to contemplate how the proceeding
              process will be.
            </p>
          </div>
          <div className="col">
            <div>
              <img id="icon" src={SupportIcon} alt="supportIcon"></img>
              <h3>Support</h3>
            </div>
            <p>
              State your business' requirements for digitalization. At Digitarc
              LLC., we consider every single detail to fulfill the requirements
              of the software on our behalf. After carefully inspecting the
              requirements, it gets possible to contemplate how the proceeding
              process will be.
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Process;
