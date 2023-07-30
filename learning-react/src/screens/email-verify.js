import axios from 'axios';
import React, {useState} from 'react';

const EmailSendPage = () => {
  
  const [email, setEmail] = useState("");
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  

  const verifyEmail = () => {
    const url = "http://localhost:5000/mail";
    axios.post(url, {email})
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error on verfying email");
      })
  }

  return (
    <div>
      <textarea placeholder='Enter email address' onChange={handleEmail}></textarea>
      <br/>
      <button onClick={() => verifyEmail()}>Verify my Email</button>
    </div>
  );
};

export default EmailSendPage;