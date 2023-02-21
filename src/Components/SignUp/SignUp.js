import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    
    }

       /*const passCheck = () => {
        if(password !== confirmPassword)
        {
alert("password doesn't match")
        }
     } */

    function handleSubmit(e) {

        e.preventDefault();
        console.log(e.target.value)
      }

      const signUpReq = () => {
        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "")
        {
            alert('Please fill all the fields');
        }
        else {
        alert('SignUp Success!!');
        navigate("/");
        }
      }
    return (

<React.Fragment>
  <h1 className="signh1">Sign Up</h1>
 <Form className="formclass" onSubmit={handleSubmit}>
  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/> 
  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
  <button className="signbtn" type="submit" onClick={signUpReq} >Sign Up!</button>
</Form>
</React.Fragment>
    );
  }
  
  export default SignUp;