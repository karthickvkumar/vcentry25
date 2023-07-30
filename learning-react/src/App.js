import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import HomeScreen from "./screens/home";
import LandingScreen from "./screens/landing";
import ContactScreen from "./screens/contact";
import AboutScreen from "./screens/about";
import SettingsScreen from "./screens/settings";

import ActivityScreen from "./screens/activity";
import ProfileInformationScreen from "./screens/profile-info";
import PrivacySceeen from "./screens/privacy";

import PageNotFoundScreen from "./screens/page-not-found";

import Student from "./screens/student";
import StudentCreatePage from "./screens/student-create";
import StudentList from "./screens/student-list";

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
       
        <Route path="settings" element={<SettingsScreen></SettingsScreen>}>
          <Route path="activity" element={<ActivityScreen></ActivityScreen>}></Route>
          <Route path="profile" element={<ProfileInformationScreen></ProfileInformationScreen>}></Route>
          <Route path="privacy" element={<PrivacySceeen></PrivacySceeen>}></Route>
        </Route>

        <Route path="students" element={<Student></Student>}>
          <Route path="create" element={<StudentCreatePage></StudentCreatePage>}></Route>
          <Route path="list" element={<StudentList></StudentList>}></Route>
        </Route>

        <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
