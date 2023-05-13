import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ContactScreen = () => {

  const [registerForm, UpdateRegisterForm] = useState({
    name : "",
    emailID : "",
    password : "",
    dateOfBirth : "",
    gender: "",
    hobbies : [],
    city: "",
    address : "" 
  })

  const [formError, UpdateFormError] = useState({
    name : false,
    emailID : false,
    password : false,
    dateOfBirth : false,
    gender: false,
    hobbies : false,
    city: false,
    address : false 
  })

  const handleInputField = (event) => {
    //console.log(event.target.value)
    if(event.target.name === "hobbies"){
      
      if(event.target.checked){
        registerForm.hobbies.push(event.target.value);
      }
      else{
        const indexValue = registerForm.hobbies.indexOf(event.target.value);
        registerForm.hobbies.splice(indexValue, 1);
      }

    }
    else{
      UpdateRegisterForm({...registerForm, [event.target.name] : event.target.value })
    }
  }

  const createNewAccount = () => {
    console.log(registerForm);

    UpdateFormError({
      ...formError,
      name : registerForm.name === "" ? true : false,
      emailID : registerForm.emailID === "" ? true : false, 
      password : registerForm.password === "" ? true : false,
      dateOfBirth : registerForm.dateOfBirth === "" ? true : false,
      gender : registerForm.gender === "" ? true : false,
      hobbies : registerForm.hobbies.length === 0 ? true : false,
      city : registerForm.city === "" ? true : false,
      address : registerForm.address === "" ? true : false
    })

  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="content">
        <h1>Register for a Free Account</h1>
        <div className="space-top">
          <label>Enter your Name :</label>
          <input type="text" placeholder="Enter your name" onChange={handleInputField} name="name" className={formError.name ? "error-input" : ""}/>
          { formError.name && <p className="error-text">Please enter your name</p> }
        </div>
        
        <div className="space-top">
          <label>Enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id" onChange={handleInputField} name="emailID"/>
          { formError.emailID && <p className="error-text">Please enter your email</p> }

        </div>
        <div className="space-top">
          <label>Enter your Password :</label>
          <input type="password" placeholder="Enter your Password" onChange={handleInputField} name="password" />
          { formError.password && <p className="error-text">Please enter your password</p> }

        </div>
        <div className="space-top">
          <label>Select your DOB :</label>
          <input type="date" onChange={handleInputField} name="dateOfBirth"/>
          { formError.dateOfBirth && <p className="error-text">Please selecte your date of birth</p> }

        </div>
        <div className="space-top">
          <label>Select your Gender :</label>
          <input type="radio" name="gender" value="Male" onChange={handleInputField} />Male
          <input type="radio" name="gender" value="Female" onChange={handleInputField}/>Female
          <input type="radio" name="gender" value="Others" onChange={handleInputField}/>Others

          { formError.gender && <p className="error-text">Please select your gender</p> }

        </div>
        <div className="space-top">
          <label>Select your Hobbies</label>
          <input type="checkbox" value="Cricket" onChange={handleInputField} name="hobbies"/>Cricket
          <input type="checkbox" value="Football" onChange={handleInputField} name="hobbies"/>Football
          <input type="checkbox" value="Basketball" onChange={handleInputField} name="hobbies"/>Basketball
          <input type="checkbox" value="Hockey" onChange={handleInputField} name="hobbies"/>Hockey
          <input type="checkbox" value="Caram" onChange={handleInputField} name="hobbies"/>Caram
          <input type="checkbox" value="Chess" onChange={handleInputField} name="hobbies"/>Chess

          { formError.hobbies && <p className="error-text">Please select any one Hobbies</p> }

        </div>
        <div className="space-top">
          <label>Select your City</label>
          <select defaultValue={""} onChange={handleInputField} name="city">
            <option disabled value="">Please select any one city</option>
            <option>Chennai</option>
            <option>Mumabi</option>
            <option>Delhi</option>
            <option>Erode</option>
            <option>Madurai</option>
            <option>Trichy</option>
          </select>

          { formError.city && <p className="error-text">Please select your City</p> }

        </div>
        <div className="space-top">
          <label>Enter your Address</label>
          <textarea onChange={handleInputField} name="address"></textarea>
          { formError.address && <p className="error-text">Please enter your address</p> }

        </div>
        <div className="space-top">
          <button onClick={() => createNewAccount()}>Create Account</button>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default ContactScreen;