import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import HotelListComponent from "../components/hotel-list";
import HotelSearchComponent from "../components/hotel-search";

const HotelsScreen = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{
          backgroundImage: `url(${require("../images/bg_1.jpg")})`,
        }}
      >
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Hotel <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
              <HotelSearchComponent></HotelSearchComponent>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row">
            <HotelListComponent></HotelListComponent>
            <HotelListComponent></HotelListComponent>
            <HotelListComponent></HotelListComponent>
            <HotelListComponent></HotelListComponent>
            <HotelListComponent></HotelListComponent>
            <HotelListComponent></HotelListComponent>
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HotelsScreen;
