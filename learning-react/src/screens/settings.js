import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { NavLink, Outlet } from "react-router-dom";

const SettingsScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>This is a Settings Screen</h1>
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar-link">
              <NavLink to="/settings/activity">Activity Data</NavLink>
            </div>
            <div className="sidebar-link">
              <NavLink to="/settings/profile">Profile Info</NavLink>
            </div>
            <div className="sidebar-link">
              <NavLink to="/settings/privacy">Privacy Option</NavLink>
            </div>
          </div>
          <div className="sub-content">
              <Outlet></Outlet>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default SettingsScreen;