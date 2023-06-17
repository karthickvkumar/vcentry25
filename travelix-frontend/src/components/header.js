import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand">Travelix<span>Travel Agency</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item" }><a href="index.html" className="nav-link">Home</a></NavLink>

            <NavLink to="/about" className={({isActive}) => isActive ? "nav-item active" : "nav-item" }><a href="about.html" className="nav-link">About</a></NavLink>

            <NavLink to="/destination" className={({isActive}) => isActive ? "nav-item active" : "nav-item" }><a href="destination.html" className="nav-link">Destination</a></NavLink>

            <NavLink to="/hotels" className={({isActive}) => isActive ? "nav-item active" : "nav-item" }><a href="hotel.html" className="nav-link">Hotel</a></NavLink>

            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-item active" : "nav-item" }><a href="contact.html" className="nav-link">Contact</a></NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent;