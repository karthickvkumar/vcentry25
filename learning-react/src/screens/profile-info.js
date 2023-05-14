import React, {useState} from 'react';
import axios from "axios";

const ProfileInformationScreen = () => {

  const [profile, UpdateProfile] = useState([]);

  const loadUserProfile = () => {
    const URL = "https://reqres.in/api/users?page=2";

    axios.get(URL)
      .then((repsonse) => {
        const responseData = repsonse.data;
        console.log(responseData.data);

        UpdateProfile(responseData.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const result = profile.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} alt="user" className='avatar' />
        </td>
      </tr>
    )
  })

  console.log(result)

  return (
    <div>
      <h2>Update your Profile Infomration</h2>
      <button onClick={() => loadUserProfile()}>Load Profiles</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          
          {result}
          
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInformationScreen;