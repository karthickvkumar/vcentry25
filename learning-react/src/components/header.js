import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <div className="header">
      <div className="logo">

      </div>
      <div className="screens-link">
        <NavLink to="/home" className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact-us" className="link">Contact</NavLink>
        <NavLink to="/settings" className="link">Settings</NavLink>
        <NavLink to="/login" className="link">Login</NavLink>
      </div>
    </div>
  )
}

export default HeaderComponent;