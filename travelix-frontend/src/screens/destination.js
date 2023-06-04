import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const DestinationScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <section class="hero-wrap hero-wrap-2 js-fullheight"   style={{
        "backgroundImage": `url(${require('../images/bg_4.jpg')})`
      }}>
    <div class="overlay js-fullheight"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div class="col-md-9 pb-5 text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                  class="fa fa-chevron-right"></i></a></span> <span>Tour List <i class="fa fa-chevron-right"></i></span>
          </p>
          <h1 class="mb-0 bread">Tours List</h1>
        </div>
      </div>
    </div>
  </section>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default DestinationScreen;