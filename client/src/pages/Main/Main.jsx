import React from "react";

import Header from "../../components/Header/Header";
import MethodsHandler from "../../components/MethodsHandler/MethodsHandler";
import Handler from "../../components/Handler/Handler";
import Footer from "../../components/Footer/Footer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Handler />
      <MethodsHandler />
      <Footer />
    </div>
  )
}

export default Main;