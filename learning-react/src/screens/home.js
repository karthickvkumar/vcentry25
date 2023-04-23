import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomeScreen = () => {

  let userName = {
    email : "vcentry@gmail.in"
  }

  var userList = ["abc", "cde", "efg"];

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Home Screen - {userName.email} {userList[2]}</h1>
        <img src={require("../images/shinchu.jpg")} className="image" alt=""/>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomeScreen;