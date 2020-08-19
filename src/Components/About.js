import React from "react";
import AboutHeader from "./About/AboutHeader";
import OurTeam from "./About/OurTeam";

class About extends React.Component {
  render() {
    return (
      <div>
        <AboutHeader />
        <OurTeam />
      </div>
    );
  }
}

export default About;

// export default withRouter(connect(mapStateToProps, {}), About);
