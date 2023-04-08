import React from "react";
import {NavLink} from "react-router-dom";

const LandingScreen = () => {
  return(
    <div>
      <h1>Landing Screen</h1>
      <NavLink to="/login">Go to Login Screen</NavLink>
      <br></br>
      <NavLink to="/registration">Go to Registeration Screen</NavLink>
      <br></br>
      <NavLink to="/home">Go to Home Screen</NavLink>
    </div>
  )
}

export default LandingScreen;