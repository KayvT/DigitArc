import React from "react";
import landingimg from "../../Assets/imgs/landingImg.png";
class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid landingframe">
        <div className="header-space row">
          <div className="col-lg-6">
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
          <div className="col-lg-6 landingimg">
            <img src={landingimg} alt="landing" />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
