import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HotelsScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <section class="hero-wrap hero-wrap-2 js-fullheight" style={{
        "backgroundImage": `url(${require('../images/bg_1.jpg')})`
      }}>
    <div class="overlay js-fullheight"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div class="col-md-9 pb-5 text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                  class="fa fa-chevron-right"></i></a></span> <span>Hotel <i class="fa fa-chevron-right"></i></span></p>
          <h1 class="mb-0 bread">Hotel</h1>
        </div>
      </div>
    </div>
  </section>
    <FooterComponent></FooterComponent>
    </div>
  )
}

export default HotelsScreen;