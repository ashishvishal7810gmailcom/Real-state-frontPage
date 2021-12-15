import React, { Component, useState } from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Filter() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
        <NavDropdown title={<span className="fa fa-filter fa-lg text-white"></span>} 
          id="collasible-nav-dropdown" 
          show={show}
          onMouseEnter={showDropdown} 
          onMouseLeave={hideDropdown}
          >         
            <NavDropdown.Item href="#">Nearest</NavDropdown.Item>
            <NavDropdown.Item href="#">Location</NavDropdown.Item>
            <NavDropdown.Item href="#">Price Low To High</NavDropdown.Item>
            <NavDropdown.Item href="#">Price High To Low</NavDropdown.Item>
            <NavDropdown.Item href="#">Popularity</NavDropdown.Item>

        </NavDropdown>
        
  )
}
export default Filter;