import React, { useState } from 'react';
import {NavDropdown } from 'react-bootstrap';

function Sell() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
        <NavDropdown title={<span> Sell</span>} 
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
export default Sell;