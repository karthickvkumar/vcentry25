import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import HomeScreen from "./screens/home";
import LandingScreen from "./screens/landing";
import ContactScreen from "./screens/contact";
import AboutScreen from "./screens/about";
import SettingsScreen from "./screens/settings";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="registration" element={<RegisterScreen></RegisterScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>

        <Route path="contact-us" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="settings" element={<SettingsScreen></SettingsScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
