import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AdminDestinationScreens = () => {

  const [destinationForm, updateDestinationForm] = useState({
    destinationName : "",
    destinationImage : "",
    destinationCount : ""
  });

  const [destinationList, updateDestinationList] = useState([]);

  useEffect(() => {
    listAllDestination();
  }, []);

  const onHandleInput = (event) => {
    updateDestinationForm({...destinationForm, [event.target.name] : event.target.value});
  }

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      updateDestinationForm({...destinationForm, destinationImage : reader.result});
    }
  }

  const submitDestination = () => {
    console.log(destinationForm);

    const url = "http://localhost:4000/add/destination";
    axios.post(url, destinationForm)
      .then((response) => {
        const result = response.data;
        alert(result.message);
        listAllDestination();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const listAllDestination = () => {
    const url = "http://localhost:4000/list/destination";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        updateDestinationList(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteDestination = (value) => {
    const url = "http://localhost:4000/delete/destination/" + value.id;

    axios.delete(url)
      .then((response) => {
        const result = response.data;
        alert(result.message);
        listAllDestination();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Upload your Destinations</h2>
      <div>
        <label>Enter Destination Name :</label>
        <input type='text' placeholder='Enter Destination Name' name='destinationName' onChange={onHandleInput}/>
      </div>
      <div>
        <label>Enter Destination Count :</label>
        <input type='text' placeholder='Enter Destination Count' name='destinationCount' onChange={onHandleInput}/>
      </div>
      <div>
        <label>Upload Destination Image :</label>
        <input type='file' onChange={uploadImage} />
      </div>
      <div>
        <button onClick={() => submitDestination()}>Submit Destination</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Destination Name</th>
              <th>Destination Image</th>
              <th>Destination Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              destinationList.map((value, index) => {
                return(
                  <tr key={index}>
                    <td>{value.destinationName}</td>
                    <td>
                      <img src={value.destinationImage} width="50"/>
                    </td>
                    <td>{value.destinationCount}</td>
                    <td>
                      <button onClick={() => deleteDestination(value)}>Delete</button>
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

export default AdminDestinationScreens;