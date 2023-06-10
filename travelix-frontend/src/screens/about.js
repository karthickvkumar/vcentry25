import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const AboutScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{
        "backgroundImage": `url(${require('../images/services-2.jpg')})`
      }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                      className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section services-section">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
              <div class="w-100">
                <span class="subheading">Welcome to Travelix</span>
                <h2 class="mb-4">It's time to start your adventure</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                  ocean.
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p><a href="#" class="btn btn-primary py-3 px-4">Search Destination</a></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-1 d-block img"
                    style={{
                      "backgroundImage": `url(${require('../images/services-1.jpg')})`
                    }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span
                        class="flaticon-paragliding"></span></div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Activities</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-2 d-block img"
                    style={{
                      "backgroundImage": `url(${require('../images/services-2.jpg')})`
                    }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-route"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Travel Arrangements</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-3 d-block img"
                    style={{
                      "backgroundImage": `url(${require('../images/services-3.jpg')})`
                    }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span
                        class="flaticon-tour-guide"></span></div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Private Guide</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-4 d-block img"
                    style={{
                      "backgroundImage": `url(${require('../images/services-4.jpg')})`
                    }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-map"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Location Manager</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-about img" style={{
        "backgroundImage": `url(${require('../images/bg_4.jpg')})`
      }}>
    <div class="overlay"></div>
    <div class="container py-md-5">
      <div class="row py-md-5">

      </div>
    </div>
  </section>

  <section class="ftco-section ftco-about ftco-no-pt img">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-12 about-intro">
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="img d-flex w-100 align-items-center justify-content-center"
                style={{
                  "backgroundImage": `url(${require('../images/about-1.jpg')})`
                }}>
              </div>
            </div>
            <div class="col-md-6 pl-md-5 py-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section">
                  <span class="subheading">About Us</span>
                  <h2 class="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.</p>
                  <p><a href="#" class="btn btn-primary">Book Your Destination</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default AboutScreen;