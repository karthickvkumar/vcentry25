import React, {useState, useContext} from 'react';
import axios from 'axios';

import DataSharingContext from '../context/data-sharing-context';

const HotelSearchComponent = () => {

  const context = useContext(DataSharingContext);

  const [hotelForm, submitHotelForm] = useState({
    hotelLocation : "",
    checkIn: "",
    checkOut: "",
    price : ""
  });

  const onHandleInput = (event) => {
    submitHotelForm({...hotelForm, [event.target.name] : event.target.value});
  }

  const searchHotels = () => {
    console.log(hotelForm);
    const url = `https://travalix-backend-24.onrender.com/list/hotel?hotelLocation=${hotelForm.hotelLocation}`

    axios.get(url)
      .then((response) => {
        const result = response.data;
        context.globalFunction(result);
      })
      .catch((error) => {
        console.log(error);
      })
  
  }

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
              <input type="text" className="form-control" placeholder="Search place" onChange={onHandleInput} name='hotelLocation' />
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Check-in date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input type="date" className="form-control checkin_date" placeholder="Check In Date" onChange={onHandleInput} name='checkIn' />
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Check-out date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input type="date" className="form-control checkout_date" placeholder="Check Out Date" onChange={onHandleInput} name='checkOut'/>
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group p-4">
            <label for="#">Price Limit</label>
            <div className="form-field">
              <div className="select-wrap">
                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                <select id="" className="form-control" onChange={onHandleInput} name='price'>
                  <option>$100</option>
                  <option>$10,000</option>
                  <option>$50,000</option>
                  <option>$100,000</option>
                  <option>$200,000</option>
                  <option>$300,000</option>
                  <option>$400,000</option>
                  <option>$500,000</option>
                  <option>$600,000</option>
                  <option>$700,000</option>
                  <option>$800,000</option>
                  <option>$900,000</option>
                  <option>$1,000,000</option>
                  <option>$2,000,000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex">
          <div className="form-group d-flex w-100 border-0">
            <div className="form-field w-100 align-items-center d-flex">
              <input type="button" value="Search"
                className="align-self-stretch form-control btn btn-primary" onClick={() => searchHotels()} />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  );
};

export default HotelSearchComponent;