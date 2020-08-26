import React from "react";
import landingimg from "../../Assets/imgs/HomeHeaderImg/landing.svg";
class Header extends React.Component {
  render() {
    return (
      <div className="landingframe header-space">
        <div className="row" style={{ margin: 0 }}>
          <div className="landingText">
            <div className="from">FROM</div>
            <div className="from-row">
              <div className="problem">PROBLEM</div>
              <div className="to">TO</div>
              <div className="to-row">
                <div className="solution">SOLUTION</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btnText landingBTN">GET STARTED!</button>

        <div className="row" style={{ margin: 0 }}>
          <img id="landingimg" src={landingimg} alt="landing" />
        </div>
      </div>
    );
  }
}
export default Header;
