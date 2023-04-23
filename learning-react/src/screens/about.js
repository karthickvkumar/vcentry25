// Step 1: To import useState method from React
import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const AboutScreen = () => {

  //step 2: To utlize the useState function into Coding
  //const [variableName, functionName] = useState(initialValue);
  const [dynamicValue, updateDynamicValue] = useState("");

  const triggerTextbox = (event) => {
    console.log(event.target.value);
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>This is a About Screen</h1>
        <div className="align-vertical-center">
          <label className="label">Enter your message</label>
          <textarea className="textbox" onChange={triggerTextbox}></textarea>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default AboutScreen;