import React from "react";

const HomeScreen = () => {
  return(
    <div>
      {/* Header Start */}
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
              <li class="nav-item"><a href="destination.html" class="nav-link">Destination</a></li>
              <li class="nav-item"><a href="hotel.html" class="nav-link">Hotel</a></li>
              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Header End */}
      <div class="hero-wrap js-fullheight header-banner" style={{
        "backgroundImage": `url(${require('../images/bg_5.jpg')})`
      }}>
          <div class="overlay header-banner"></div>
          <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center">
              <div class="col-md-7">
                <span class="subheading">Welcome to Travelix</span>
                <h1 class="mb-4">Discover Your Favorite Place with Us</h1>
                <p class="caps">Travel to the any corner of the world, without going around in circles</p>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeScreen;