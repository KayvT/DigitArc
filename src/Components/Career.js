import React from "react";
import CareerHeader from "./Career/CareerHeader";
import Accordin from "../Components/Career/WorkWithUs";
class Career extends React.Component {
  render() {
    return (
      <>
        <CareerHeader />
        <div className="col d-flex justify-content-center align-items-center">
          <h1 className="career-text">Open Positions</h1>
        </div>
        <Accordin
          jobOpening={{
            title: "Senior FrontEnd Engineer",
            Description: "This is a job for the strongest of heart",
          }}
        />
        <Accordin
          jobOpening={{
            title: "Senior FrontEnd Engineer",
            Description: "This is a job for the strongest of heart",
          }}
        />
        <Accordin
          jobOpening={{
            title: "Senior FrontEnd Engineer",
            Description: "This is a job for the strongest of heart",
          }}
        />
      </>
    );
  }
}
export default Career;
