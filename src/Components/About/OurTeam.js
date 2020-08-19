import React from "react";
import KayPic from "../../Assets/imgs/TeamPics/Kay.JPG";
class OurTeam extends React.Component {
  render() {
    return (
      <div className="header-space">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="services-text">OUR TEAM</h1>
          </div>
        </div>
        <div className="box">
          <div className="item card1">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
          <div className="item card2">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
          <div className="item card3">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
          <div className="item card4">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
          <div className="item card5">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
          <div className="item card6">
            <img src={KayPic} alt="kaypic" />
            <span className="name"> KHALED YASSEN</span>
            <span className="role"> Software Dev</span>
          </div>
        </div>
      </div>
    );
  }
}
export default OurTeam;
// <div className="">
//   <div className="" style={{ margin: 0 }}>
//     <div className="">
//       <div className="teamCard">
//         <img src={KayPic} alt="khaledPic" />
//       </div>
//       <span>Khaled Yassen</span>
//       <span>Chief Operation</span>
//     </div>
//     <div className="">
//       <div className="teamCard">
//         <img src={KayPic} alt="khaledPic" />
//         <span>Khaled Yassen</span>
//         <span>Chief Operation</span>
//       </div>
//     </div>
//     <div className="">
//       <div className="teamCard">
//         <img src={KayPic} alt="khaledPic" />
//         <span>Khaled Yassen</span>
//         <span>Chief Operation</span>
//       </div>
//     </div>
//   </div>
{
  /* <div className="row" style={{ margin: 0 }}>
          <div className="col-4">
            <div className="card">
              <img src={KayPic} alt="khaledPic" />
              <span>Khaled Yassen</span>
              <span>Chief Operation</span>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={KayPic} alt="khaledPic" />
              <span>Khaled Yassen</span>
              <span>Chief Operation</span>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={KayPic} alt="khaledPic" />
              <span>Khaled Yassen</span>
              <span>Chief Operation</span>
            </div>
          </div>
        </div> */
}
// </div>
