import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import DestinationScreen from "./screens/destination";
import HotelsScreen from "./screens/hotels";
import ContactScreen from "./screens/contact";
import AdminDestinationScreens from "./screens/admin-destination";
import AdminHotelScreen from "./screens/admin-hotel";

import DataSharingContext from "./context/data-sharing-context";

import "./css/flaticon.css";
import "./css/style.css";
import "./css/App.css";

const App = () => {

  const [sharedData, updateSharedData] = useState([]);

  const globalFunction = (data) => {
    updateSharedData(data);
  }

  return(
    <DataSharingContext.Provider value={{globalFunction, sharedData}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
          <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
          <Route path="hotels" element={<HotelsScreen></HotelsScreen>}></Route>
          <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
          
          <Route path="admin/destination" element={<AdminDestinationScreens></AdminDestinationScreens>}></Route>
          <Route path="admin/hotel" element={<AdminHotelScreen></AdminHotelScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </DataSharingContext.Provider>
  )
}

export default App;