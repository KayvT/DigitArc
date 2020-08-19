import React from "react";
import notfoundPic from "../Assets/imgs/404HeaderImg/404.png";
class not_found extends React.Component {
  render() {
    return (
      <>
        <div className="not-found">
          <img src={notfoundPic} alt="404" />
          <p>Oh! You seem to have jumped into the wrong portal!</p>
          <button className="btnText landingBTN">Head back home!</button>
        </div>
      </>
    );
  }
}
export default not_found;
