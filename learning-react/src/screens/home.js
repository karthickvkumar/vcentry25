import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomeScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Home Screen</h1>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomeScreen;