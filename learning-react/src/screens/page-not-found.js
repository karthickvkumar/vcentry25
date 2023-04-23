import React from "react";

const PageNotFoundScreen = () => {
  return(
    <div>
      <h1>The page you've entered is not available</h1>
      <img src={require("../images/not-found.jpg")} alt="not-found"/>
    </div>
  )
}

export default PageNotFoundScreen;