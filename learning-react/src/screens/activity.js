import React, {useState} from "react";

const ActivityScreen = () => {

  const [bulbMode, SetBulbMode] = useState(false);

  const buildONOFF = (bulbStatus) => {
    SetBulbMode(bulbStatus);
  }
  
  return(
    <div>
      <h2>Check about your Account Activity</h2>

      <div>
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