import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ContactScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>This is a Contact Page</h1>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default ContactScreen;