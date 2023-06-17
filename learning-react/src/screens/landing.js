import React from "react";
import {NavLink} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

const LandingScreen = () => {
  return(
    <div>
      <h1>Landing Screen</h1>
      <NavLink to="/login">Go to Login Screen</NavLink>
      <br></br>
      <NavLink to="/registration">Go to Registeration Screen</NavLink>
      <br></br>
      <NavLink to="/home">Go to Home Screen</NavLink>
      <br></br>
      <NavLink to="/students">Go to Students List Screen</NavLink>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

export default LandingScreen;