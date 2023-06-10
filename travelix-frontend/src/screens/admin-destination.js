import React, {useState} from 'react';

const AdminDestinationScreens = () => {

  const [destinationForm, updateDestinationForm] = useState({
    destinationName : "",
    destinationImage : "",
    destinationCount : ""
  });

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
    </div>
  );
};

export default AdminDestinationScreens;