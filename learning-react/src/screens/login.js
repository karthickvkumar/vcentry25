import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [loginForm, SubmitLogin] = useState({
    email : "",
    password : ""
  });

  const goToHomeScreen = () => {
    navigate("/home");
  };

  // const captureEmailInput = (event) => {
  //   // console.log(event.target.value);
  //   // loginForm.emailId = event.target.value;
  //   SubmitLogin({...loginForm, emailId : event.target.value});
  // }
  
  // const capturePasswordInput = (event) => {
  //   // console.log(event.target.value);
  //   SubmitLogin({...loginForm, password : event.target.value});
  // }

  const handleInputField = (event) => {
    // console.log(event.target.value, event.target.name);

    SubmitLogin({...loginForm, [event.target.name] : event.target.value });
  }

  const loginAction = () => {
    console.log(loginForm);
    const url = "https://reqres.in/api/login";

    axios.post(url, loginForm)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Login Screen</h1>
        <div>
          <label>Enter your Email ID</label>
          <input type="text" placeholder="Enter email Id" onChange={handleInputField} name="email" />
        </div>
        <div>
          <label>Enter your Password</label>
          <input type="password" placeholder="Enter Password" onChange={handleInputField} name="password"/>
        </div>
        <div>
          <button onClick={() => loginAction()}>Login</button>
        </div>

        <NavLink to="/">Go to landing screen</NavLink>
        <br />
        <button onClick={() => goToHomeScreen()}>Go to Home page</button>
        <h1>{loginForm.emailId}, {loginForm.password}</h1>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default LoginScreen;
