import React from "react";
import "./Components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Landing/Header";
import OurServices from "./Components/Landing/OurServices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurServices />
    </div>
  );
}

export default App;
