import React from "react";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
  return(
    <div>
      <div className="header">
        <div className="logo">

        </div>
        <div className="screens-link">
          <NavLink to="/home" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/contact-us" className="link">Contact</NavLink>
          <NavLink to="/settings" className="link">Settings</NavLink>
        </div>
      </div>
      <div className="content">
        <h1>Home Screen</h1>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default HomeScreen;