import React from 'react';

const TourListComponent = (props) => {
  return (
    <div class="col-md-4 m-btm-40">
      <div class="item">
        <div class="project-destination">
          <a href="#" class="img" style={{
    "backgroundImage": `url(${props.destinationImage})`
  }}>
            <div class="text">
              <h3>{props.destinationName}</h3>
              <span>{props.destinationCount} Tours</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourListComponent;