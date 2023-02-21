import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='../Welcome'>
            Home
          </NavLink>
          <NavLink to='../ShoppingCart'>
            My Cart
          </NavLink>
          {/* <NavLink to='../SignUp' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;