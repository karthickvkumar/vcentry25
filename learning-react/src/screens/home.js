import React, {useState} from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomeScreen = () => {

  let userName = {
    email : "vcentry@gmail.in"
  }

  var userList = ["abc", "cde", "efg"];

  const [form, updateForm] = useState({
    username : ""
  })

  const loadNodeAPI = () => {
    const url = "http://localhost:4000/status";

    axios.get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleInput = (event) => {
    updateForm({...form, [event.target.name] : event.target.value });
  }

  const submitUsername = () => {
    console.log(form);
    const url = "http://localhost:4000/submit";

    axios.post(url, form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Home Screen - {userName.email} {userList[2]}</h1>
        <img src={require("../images/shinchu.jpg")} className="image" alt=""/>
        <br/>
        <button onClick={() => loadNodeAPI()}>Load Node API</button>
        <div>
          <label>Enter your Username</label>
          <input type="text" placeholder="Enter username" onChange={handleInput} name="username" />
          <br/>
          <button onClick={() => submitUsername() }>Subumit Username</button>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomeScreen;