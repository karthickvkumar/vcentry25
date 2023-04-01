import React from "react";

import "./css/style.css";

const App = () => {

  const userName = "Karthick Kumar";
  
  const buttonClick = () => {
    alert("Button has been clicked");
  }

  return(
    <div>
      <h1 className="heading">Welcome to ES6 {userName}</h1>
      <h1>{userName}</h1>
      <button onClick={() => buttonClick() }>Trigger Function</button>
    </div>
  )
}

export default App;
