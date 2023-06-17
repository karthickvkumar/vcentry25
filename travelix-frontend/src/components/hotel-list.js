import React from 'react';

const HotelListComponent = (props) => {
  return (
    <div class="col-md-4">
          <div class="project-wrap hotel">
            <a href="#" class="img" style={{
        "backgroundImage": `url(${props.hotelImage})`
      }}>
              <span class="price">${props.hotelPrice}/person</span>
            </a>
            <div class="text p-4">
              <p class="star mb-2">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <span class="days">8 Days Tour</span>
              <h3><a href="#">{props.hotelName}</a></h3>
              <p class="location"><span class="fa fa-map-marker"></span> {props.hotelLocation}</p>
              <ul>
                <li><span class="flaticon-shower"></span>2</li>
                <li><span class="flaticon-king-size"></span>3</li>
                <li><span class="flaticon-mountains"></span>Near Mountain</li>
              </ul>
            </div>
          </div>
        </div>
  );
};

export default HotelListComponent;