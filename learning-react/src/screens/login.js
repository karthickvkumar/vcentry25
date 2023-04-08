import React from "react";
import {NavLink} from "react-router-dom";

const LoginScreen = () => {
  return(
    <div>
      <h1>Login Screen</h1>
      <NavLink to="/">Go to landing screen</NavLink>
    </div>
  )
}

export default LoginScreen;