import React, { Component, useState } from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Rent() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
        <NavDropdown title={<span> Rent</span>} 
          id="collasible-nav-dropdown" 
          show={show}
          onMouseEnter={showDropdown} 
          onMouseLeave={hideDropdown}
          >         
            <NavDropdown.Item href="#">Item1</NavDropdown.Item>
            <NavDropdown.Item href="#">Item2</NavDropdown.Item>
            <NavDropdown.Item href="#">Item3</NavDropdown.Item>
            <NavDropdown.Item href="#">Item4</NavDropdown.Item>
        </NavDropdown>
  )
}
export default Rent;