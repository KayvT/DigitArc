import React from "react";
import ImpressumHeaderImg from "../../Assets/imgs/impressumHeaderImg/Impressum.svg";

class Impressum extends React.Component {
  render() {
    return (
      <div>
        <div className="impressumHeader">
          <img src={ImpressumHeaderImg} alt="impressumheader" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="impressum-text">DigitArc</h1>

            <div className="details-text">
              <div>Geramny, Hunkar street</div>
              <div>+90508413210</div>
              <div> kayv@gmail.com</div>
              <div>Geramny, Hunkar street</div>
              <div>+90508413210</div>
              <div> kayv@gmail.com</div>
              <div>Geramny, Hunkar street</div>
              <div>+90508413210</div>
              <div> kayv@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressum;
