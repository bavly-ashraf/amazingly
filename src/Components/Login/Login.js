import React, {useState} from 'react'
import './Login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link , useNavigate} from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function ValidateLogin()
  {
   return email.length > 0 && pass.length > 0;
  }

  function handleSubmit(e) {

    e.preventDefault();

  }

  return (
<div className='Container'>   
<div className='Login'>
  <h1 className='h1welcome'>Welcome to Amazingly!</h1>
<Form onSubmit={handleSubmit}>


<Form.Group size="lg" controlId="email" style={{padding: 5}}>

  <Form.Label className='emailtxt'>Email</Form.Label>

  <Form.Control className='emailinput'

    autoFocus

    type="email"

    value={email}

    onChange={(e) => setEmail(e.target.value)}

  />

</Form.Group>

<Form.Group size="lg" controlId="password" style={{padding: 20}}>

  <Form.Label className='passtxt'>Password</Form.Label>

  <Form.Control 

    type="password"

    value={pass}

    onChange={(e) => setPass(e.target.value)}

  />

</Form.Group>


<Button onClick={() => navigate("welcome")} className={!ValidateLogin() ? 'disabledbtn' : 'lgnbtn'} blocksize="lg" type="submit" disabled={!ValidateLogin()}>
  Login
</Button>
<Link to="SignUp" style={{padding: 20}}>Not a Member?</Link>
</Form>
</div>
</div> 
  );
}

export default Login;