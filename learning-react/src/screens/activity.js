import React, {useState} from "react";

const ActivityScreen = () => {

  const [bulbMode, SetBulbMode] = useState(false);
  const [eyeMode, SetEyeMode] = useState(true);

  const buildONOFF = (bulbStatus) => {
    SetBulbMode(bulbStatus);
  }

  const eyeCloseOpen = (status) => {
    SetEyeMode(status);
  }
  
  return(
    <div>
      <h2>Check about your Account Activity</h2>

      <div>
        <h2>Password Visiblity</h2>
        <div>
          <input type={eyeMode ? "password" : "text"} placeholder="Enter your password" />
          {
            eyeMode ? 
            <img src={require("../images/close-eye.png")} onClick={() => eyeCloseOpen(false)}/>
            :
            <img src={require("../images/open-eye.png")} onClick={() => eyeCloseOpen(true)}/>
          }
        </div>
      </div>

      <div className="space-top">
        <button onClick={() => buildONOFF(true)}>Turn ON</button>
        <button onClick={() => buildONOFF(false)}>Turn Off</button>
        <div>
          {
            bulbMode ? 
            <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
            :
            <img src={require("../images/pic_bulboff.gif")} /> 
          }
        </div>
      </div>
    </div>
  )
}

export default ActivityScreen;