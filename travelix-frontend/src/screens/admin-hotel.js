import React, {useState,useEffect} from 'react';
import axios from 'axios';

const AdminHotelScreen = () => {

  const [hotelForm, updateHotelForm] = useState({
    hotelName : "",
    hotelLocation : "",
    hotelPrice : "",
    hotelImage : ""
  });

  const [hotelList, updateHotelList] = useState([]);

  useEffect(() => {
    listAllHotels();
  },[])

  const handleInput = (event) => {
    updateHotelForm({...hotelForm, [event.target.name] : event.target.value});
  }

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      updateHotelForm({...hotelForm, hotelImage : reader.result});
    }
  }

  const submitHotel = () => {
    console.log(hotelForm);
    const url = "https://travalix-backend-24.onrender.com/add/hotel";

    axios.post(url, hotelForm)
      .then((response) => {
        const result = response.data;
        alert(result.message);
        listAllHotels();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  
  const listAllHotels = () => {
    const url = "https://travalix-backend-24.onrender.com/list/hotel";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        updateHotelList(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteHotel = (value) => {
    const url = "https://travalix-backend-24.onrender.com/delete/hotel/" + value.id;

    axios.delete(url)
      .then((response) => {
        const result = response.data;
        alert(result.message);
        listAllHotels();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Upload Hotel information</h2>
      <div>
        <label>Enter Hotel Name :</label>
        <input type='text' placeholder='Enter hotel name' name='hotelName' onChange={handleInput}/>
      </div>
      <div>
        <label>Enter Hotel Location :</label>
        <input type='text' placeholder='Enter hotel location'  name='hotelLocation' onChange={handleInput}/>
      </div>
      <div>
        <label>Enter Hotel Price :</label>
        <input type='text' placeholder='Enter hotel price'  name='hotelPrice' onChange={handleInput}/>
      </div>
      <div>
        <label>Enter Hotel Image :</label>
        <input type='file' onChange={uploadImage}/>
      </div>
      <div>
        <button onClick={() => submitHotel()}>Submit Hotel Info</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Hotel Image</th>
              <th>Hotel Location</th>
              <th>Hotel Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              hotelList.map((value, index) => {
                return(
                  <tr key={index}>
                    <td>{value.hotelName}</td>
                    <td>
                      <img src={value.hotelImage} width="75"/>
                    </td>
                    <td>{value.hotelLocation}</td>
                    <td>{value.hotelPrice}</td>
                    <td>
                      <button onClick={() => deleteHotel(value)}>Delete</button>
                    </td>
                  </tr>
                )
              })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHotelScreen;