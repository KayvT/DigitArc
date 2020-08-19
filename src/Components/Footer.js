import React from "react";
import logo from "../Assets/imgs/Logo/WHITELOGOkatman 1.png";
import footerImg from "../Assets/imgs/Decor SVGS/footerImg.png";
import linkedinIcon from "../Assets/imgs/FooterIcons/icons8_linkedin_240px_1.png";
import twitterIcon from "../Assets/imgs/FooterIcons/icons8_twitter_240px_1.png";
import facebookIcon from "../Assets/imgs/FooterIcons/icons8_facebook_128px_1.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="row footer" style={{ margin: 0, marginTop: 200 }}>
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
          <img src={footerImg} alt="footerImg" />
        </div>
        <div className="col-lg footercontact">
          <div className="row">
            <Link to="/impressum">Impressum</Link>
            <a href="#">
              <img src={linkedinIcon} alt="linkedinicon" />
            </a>
          </div>
          <div className="row">
            {/* <span> */}
            {/* <a href="#">Contact</a> */}
            {/* </span> */}
            <a href="#">
              <img src={twitterIcon} alt="twittericon" />
            </a>
          </div>
          <div className="row">
            {/* <a href="#">Privacy Policy</a> */}

            <a href="#">
              <img src={facebookIcon} alt="facebookicon" href="#" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
