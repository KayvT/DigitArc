import React from "react";
import logo from "../Assets/imgs/Logo/WHITELOGOkatman 1.png";
import footerImg from "../Assets/imgs/Decor SVGS/footerImg.png";
import linkedinIcon from "../Assets/imgs/FooterIcons/icons8_linkedin_240px_1.png";
import twitterIcon from "../Assets/imgs/FooterIcons/icons8_twitter_240px_1.png";
import facebookIcon from "../Assets/imgs/FooterIcons/icons8_facebook_128px_1.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="row footer" style={{ margin: 0 }}>
        <div className="col-lg address">
          <img src={logo} alt="logo" />
          {/* <div className="addressSpace"> */}
          {/* <span className="companyAddress">
            +535 971 39 02 noreply@DigitArc.com
            <br />
            Ünalan, Emaar Heights, Libadiye Cd No:82 D:E, 34700 Üsküdar/İstanbul
            {/* </div> */}
          {/* </span> */}
        </div>
        <div className="col-lg footerimg">
          <img src={footerImg} />
        </div>
        <div className="col-lg footercontact">
          <div className="row">
            <span>Impressum</span>
            <img src={linkedinIcon} alt="linkedinIcon" />
          </div>
          <div className="row">
            <span>Contact</span>
            <img src={twitterIcon} alt="linkedinIcon" />
          </div>
          <div className="row">
            <span>Privacy Policy</span>
            <img src={facebookIcon} alt="linkedinIcon" />
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
