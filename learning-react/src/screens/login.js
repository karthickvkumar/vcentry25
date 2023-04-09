import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const LoginScreen = () => {

  const navigate = useNavigate();

  const goToHomeScreen = () => {
    navigate("/home");
  }
  
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Login Screen</h1>
        <NavLink to="/">Go to landing screen</NavLink>
        <br/>
        <button onClick={() => goToHomeScreen() }>Go to Home page</button>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default LoginScreen;