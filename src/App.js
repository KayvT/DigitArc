import React from "react";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Landing/Header";
import OurServices from "./Components/Landing/OurServices";
import WhatWeDo from "./Components/Landing/WhatWeDo";
import Process from "./Components/Landing/Process";
import QualityControl from "./Components/Landing/QualityControl";
import Clients from "./Components/Landing/Clients";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurServices />
      <WhatWeDo />
      <Process />
      <QualityControl />
      <Clients />
    </div>
  );
}

export default App;
