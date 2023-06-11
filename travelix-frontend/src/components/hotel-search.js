import React from 'react';

const HotelSearchComponent = () => {
  return (
    <div className="tab-pane show active" id="v-pills-1" role="tabpanel"
    aria-labelledby="v-pills-nextgen-tab">
    <form action="#" className="search-property-1">
      <div className="row no-gutters">
        <div className="col-md d-flex">
          <div className="form-group p-4 border-0">
            <label for="#">Destination</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-search"></span></div>
              <input type="text" className="form-control" placeholder="Search place" />
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Check-in date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input type="date" className="form-control checkin_date" placeholder="Check In Date" />
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Check-out date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input type="date" className="form-control checkout_date" placeholder="Check Out Date" />
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Price Limit</label>
            <div className="form-field">
              <div className="select-wrap">
                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                <select name="" id="" className="form-control">
                  <option value="">$100</option>
                  <option value="">$10,000</option>
                  <option value="">$50,000</option>
                  <option value="">$100,000</option>
                  <option value="">$200,000</option>
                  <option value="">$300,000</option>
                  <option value="">$400,000</option>
                  <option value="">$500,000</option>
                  <option value="">$600,000</option>
                  <option value="">$700,000</option>
                  <option value="">$800,000</option>
                  <option value="">$900,000</option>
                  <option value="">$1,000,000</option>
                  <option value="">$2,000,000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group d-flex w-100 border-0">
            <div className="form-field w-100 align-items-center d-flex">
              <input type="submit" value="Search"
                className="align-self-stretch form-control btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  );
};

export default HotelSearchComponent;