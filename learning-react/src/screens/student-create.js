import React, {useState} from "react";
import axios from "axios";

const StudentCreatePage = () => {

  const [studentForm, UpdateStudentForm] = useState({
    firstName : "",
    lastName : "",
    age : ""
  });

  const onHandleInput = (event) => {
    //studentForm.firstName = "asdsad";

    UpdateStudentForm({...studentForm, [event.target.name] : event.target.value });
  }

  const submitStudentProfile = () => {
    console.log(studentForm);

    const url = "http://localhost:4000/create/student";

    axios.post(url, studentForm)
      .then((response) => {
        const result = response.data;
        alert(result.message);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <label>Enter your First Name :</label>
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={onHandleInput}
        name="firstName"
      />
      <br></br>
      <label>Enter your Last Name :</label>
      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={onHandleInput}
        name="lastName"
      />
      <br></br>
      <label>Enter your Age :</label>
      <input
        type="text"
        placeholder="Enter Age"
        onChange={onHandleInput}
        name="age"
      />
      <br></br>
      <button onClick={() => submitStudentProfile()}>
        Submit Student Profile
      </button>
    </div>
  );
};

export default StudentCreatePage;
