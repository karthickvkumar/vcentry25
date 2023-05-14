import React from 'react';
import axios from "axios";

const ProfileInformationScreen = () => {

  const loadUserProfile = () => {
    const URL = "https://reqres.in/api/users?page=2";

    axios.get(URL)
      .then((repsonse) => {
        const responseData = repsonse.data;
        console.log(responseData.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Update your Profile Infomration</h2>
      <button onClick={() => loadUserProfile()}>Load Profiles</button>
    </div>
  );
};

export default ProfileInformationScreen;