import React from "react";
import ContractIcon from "../../Assets/imgs/Process Icons/Contact200px.png";
import DevelopIcon from "../../Assets/imgs/Process Icons/develop240px.png";
import RequirmentsIcon from "../../Assets/imgs/Process Icons/requirments240px.png";
import SupportIcon from "../../Assets/imgs/Process Icons/support240px.png";

class Process extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="services-text">Process</h1>
          </div>
        </div>
        <div className="process header-space row">
          <div className="col">
            <div>
              <img id="icon" src={RequirmentsIcon}></img>
              <h3>Get Requirements</h3>
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
              <img id="icon" src={ContractIcon}></img>
              <h3>Sign Contract</h3>
            </div>
            <p>
              After signing the contact for both software development and
              software counselling, we give high priority importance to every
              single one of our clients. We report mostly on daily basis to
              serve our clients with the best of us. The prolonging process of
              the development
            </p>
          </div>
          <div className="col">
            <div>
              <img id="icon" src={DevelopIcon}></img>
              <h3>Start Development</h3>
            </div>
            <p>
              The software development process is illustrated on every angle to
              the client whenever they want to see. Every aspect of the process
              can easily be examined by the client and any feedback is accepted
              on our behalf. The prolonging process of the development can be
              inspected on every single aspect.
            </p>
          </div>
          <div className="col">
            <div>
              <img id="icon" src={SupportIcon}></img>
              <h3>Provide Support</h3>
            </div>
            <p>
              After the acceptance of the software by the client, we serve the
              maintenance for both the continuity of your software and keeping
              all the innovations in tech industry to keep your software up to
              date. The prolonging process of the development can be inspected
              on every single aspect.
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Process;
