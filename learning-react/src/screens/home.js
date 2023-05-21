import React from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomeScreen = () => {

  let userName = {
    email : "vcentry@gmail.in"
  }

  var userList = ["abc", "cde", "efg"];


  const loadNodeAPI = () => {
    const url = "http://localhost:4000/status";

    axios.get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Home Screen - {userName.email} {userList[2]}</h1>
        <img src={require("../images/shinchu.jpg")} className="image" alt=""/>
        <button onClick={() => loadNodeAPI()}>Load Node API</button>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomeScreen;