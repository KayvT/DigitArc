import React from "react";
import landingimg from "../../Assets/imgs/Header img/landing.png";
class Header extends React.Component {
  render() {
    return (
      // <>
      <div className="landingframe header-space">
        <div className="row">
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

        <div className="row">
          <img src={landingimg} alt="landing" />
        </div>
      </div>
      // </>
    );
  }
}
export default Header;
/*
 <div className="container-fluid landingframe">
        <div className="header-space row">
           <div className="col"> 
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

          <img src={landingimg} alt="landing" /> 
        </div>
        <div className="row">
          <img src={landingimg} alt="landing" />
        </div>
      </div>
*/
