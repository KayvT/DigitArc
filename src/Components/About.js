import React from "react";
import { withRouter } from "react-router-dom";
import AboutHeader from "./About/AboutHeader";
import OurTeam from "./About/OurTeam";

class About extends React.Component {
  render() {
    return (
      <div>
        <AboutHeader />
        <OurTeam />
        {/* <h1>HELLLLOOO</h1> */}
      </div>
    );
  }
}

export default withRouter(About);

// export default withRouter(connect(mapStateToProps, {}), About);
