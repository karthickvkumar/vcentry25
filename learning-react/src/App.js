import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import HomeScreen from "./screens/home";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="registration" element={<RegisterScreen></RegisterScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
