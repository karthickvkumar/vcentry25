// Step 1: To import useState method from React
import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const AboutScreen = () => {

  //step 2: To utlize the useState function into Coding
  //const [stateVariableName, stateFunctionName] = useState(initialValue);
  const [dynamicValue, updateDynamicValue] = useState("");

  //Step 4: To capture a EVENT, so we are using varailable event
  const triggerTextbox = (event) => {
    console.log(event.target.value);
    //step 5: To assign value into stateVariableName 
    // stateFunctionName(value);
    updateDynamicValue(event.target.value);
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>This is a About Screen</h1>
        <div className="align-vertical-center">
          <label className="label">Enter your message</label>
          {/* Step 3: Adding onChange event to Text area and Function */}
          <textarea className="textbox" onChange={triggerTextbox}></textarea>
        </div>
        <h1>{dynamicValue}</h1>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default AboutScreen;