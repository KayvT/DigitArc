import React from "react";
import "./App.css";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Landing/Header";
import OurServices from "./Components/Landing/OurServices";
import WhatWeDo from "./Components/Landing/WhatWeDo";
import Process from "./Components/Landing/Process";
import QualityControl from "./Components/Landing/QualityControl";
import Clients from "./Components/Landing/Clients";
import Footer from "./Components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
