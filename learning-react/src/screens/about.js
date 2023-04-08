import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const AboutScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>This is a About Screen</h1>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default AboutScreen;