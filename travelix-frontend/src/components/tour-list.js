import React from 'react';

const TourListComponent = () => {
  return (
    <div class="col-md-4 m-btm-40">
      <div class="item">
        <div class="project-destination">
          <a href="#" class="img" style={{
    "backgroundImage": `url(${require('../images/place-1.jpg')})`
  }}>
            <div class="text">
              <h3>Philippines</h3>
              <span>8 Tours</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourListComponent;