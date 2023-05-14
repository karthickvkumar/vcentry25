import React, {useState, useEffect} from 'react';
import axios from "axios";

const ProfileInformationScreen = () => {

  const [profile, UpdateProfile] = useState([]);

  useEffect(() => {
    loadUserProfile(1);
  }, []);

  const loadUserProfile = (pageNo) => {
    const URL = "https://reqres.in/api/users?page=" + pageNo;

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

  return (
    <div>
      {/* <h2>Update your Profile Infomration</h2> */}
      {/* <button onClick={() => loadUserProfile()}>Load Profiles</button> */}
      <table id="customers">
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
          {
            profile.map((value, index) => {
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
          }
          {
            profile.length === 0 &&
            <tr>
              <td colSpan={5}>No Reacord Found</td>
            </tr>
          }
        </tbody>
      </table>
      <button onClick={() => loadUserProfile(1)}>1</button>
      <button onClick={() => loadUserProfile(2)}>2</button>
      <button onClick={() => loadUserProfile(3)}>3</button>
    </div>
  );
};

export default ProfileInformationScreen;