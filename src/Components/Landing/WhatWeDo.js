import React from "react";
import MobileIcon from "../../Assets/imgs/WhatWeDoIcons/Mobile-240px.png";
import BracketsIcon from "../../Assets/imgs/WhatWeDoIcons/sqaureBracks-200px.png";
import WebIcon from "../../Assets/imgs/WhatWeDoIcons/web-128px.png";
import CloudIcon from "../../Assets/imgs/WhatWeDoIcons/upload-240px.png";

class WhatWeDo extends React.Component {
  render() {
    return (
      <div className="bg">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 pad">
            <h1 className="services-text-white">WHAT WE DO</h1>
          </div>
        </div>
        <div className="WhatweDoBox header-space container">
          <div class="box-upper row">
            <div class="box-one col">
              <div className="title-icon">
                <h3>Cloud Development and Migration</h3>
                {/* <div className="test"> */}
                <img src={CloudIcon} alt="cloudIcon" />
                {/* </div> */}
              </div>
              <div className="details">
                Companies of every industry are utilizing the modern cloud
                infrastructure for so many use cases, such as backing up data,
                disk recovery, email infrastructure, software development on
                server and so on. The cloud provides you with easy access to a
                wide range of technology stack so that you can make your
                innovation faster and construct almost anything as long as you
                can contemplate.
              </div>
            </div>
            <div class="box-two col">
              <div className="title-icon">
                <h3>Mobile and Web UI/UX Design</h3>
                <img src={MobileIcon} alt="mobileIcon" />
              </div>
              <div className="details">
                Digitarc LLC. serves the vast amounts of data of the clients
                with beautiful and easy-to-use UIs to make sure that every type
                of client conveniently grasps the idea behind all the platform.
                To make sure this easiness, we produce pretty UIs for our
                clients. To design UIs with proper UX systems, we mostly use
                Adobe softwares such as Adobe XD, Adobe Photoshop, Adobe
                Illustrator, Adobe After Effects etc.
              </div>
            </div>
          </div>
          <div class="box-lower row">
            <div class="box-three col">
              <div className="title-icon">
                <h3>Frontend Software Development</h3>
                <img src={WebIcon} alt="WEbIcon" />
              </div>
              <div className="details">
                Besides designing UI/UX and developing modern backend
                technologies, we produce convenient frontend both mobile and web
                clients with latest technologies to serve our systems on
                appropriate platforms to make our clients' life easier. Mostly;
                React.js, React Native, Angular8+, Vue.js, Stencil.js are
                utilized to fulfill the frontend requirements of our
                applications. (For example, Angular is used to create this
                website)
              </div>
            </div>
            <div class="box-four col">
              <div className="title-icon">
                <h3>Backend Software Development</h3>
                <img src={BracketsIcon} alt="Bracketsicon" />
              </div>
              <div className="details">
                As Digitarc LLC., we serve our clients fast, reliable and
                scalable backend systems backed with modern software
                architectures to make sure massive amounts of the client's data
                is both stored and served appropriately. To handle all these
                operations, our systems mostly derives from ASP.NET, .NET Core,
                Node.js technologies on backend. For more information you can
                contact us or hire us for more.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WhatWeDo;
