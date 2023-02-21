import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import SignUp from './Components/SignUp/SignUp'
import ShoppingCart from './Components/ShoppingCart/shoppingCart';


function App() {

  return (
<div className="App">

      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="welcome" element={ <Welcome/> } />
        <Route path="SignUp" element={ <SignUp/> } />
        <Route path="ShoppingCart" element={ <ShoppingCart/> } />
      </Routes>
    </div>
 )
}

export default App;
