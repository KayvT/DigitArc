import React from "react";
import Header from "../Components/Landing/Header";
import OurServices from "../Components/Landing/OurServices";
import WhatWeDo from "../Components/Landing/WhatWeDo";
import Process from "../Components/Landing/Process";
import QualityControl from "../Components/Landing/QualityControl";
import Clients from "../Components/Landing/Clients";

function App() {
  return (
    <>
      <Header />
      <OurServices />
      <WhatWeDo />
      <Process />
      <QualityControl />
      <Clients />
    </>
  );
}

export default App;
