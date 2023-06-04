import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const DestinationScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <section className="hero-wrap hero-wrap-2 js-fullheight"   style={{
        "backgroundImage": `url(${require('../images/bg_4.jpg')})`
      }}>
    <div className="overlay js-fullheight"></div>
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 pb-5 text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                  className="fa fa-chevron-right"></i></a></span> <span>Tour List <i className="fa fa-chevron-right"></i></span>
          </p>
          <h1 className="mb-0 bread">Tours List</h1>
        </div>
      </div>
    </div>
  </section>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default DestinationScreen;