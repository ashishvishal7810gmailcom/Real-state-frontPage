import React, { Component, useState } from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Avatar from 'react-avatar';


function UserAvatar() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (



    <Nav navbar className="pull-right">
        <NavDropdown title={
            <Avatar name="Username" size="42" 
                textSizeRatio="2"
                round='20'
                fgColor='#fff'
                maxInitials='2'
                className="round"
                color="lightgreen"
            />
            } 
            id="collasible-nav-dropdown" 
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
        >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#">Notification</NavDropdown.Item>
            <NavDropdown.Item href="#">Customer Support</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
    </Nav>



        // <NavDropdown title={<span className="fa fa-filter fa-lg text-white"></span>} 
        //   id="collasible-nav-dropdown" 
        //   show={show}
        //   onMouseEnter={showDropdown} 
        //   onMouseLeave={hideDropdown}
        //   >         
        //     <NavDropdown.Item href="#">Nearest</NavDropdown.Item>
        //     <NavDropdown.Item href="#">Location</NavDropdown.Item>
        //     <NavDropdown.Item href="#">Price Low To High</NavDropdown.Item>
        //     <NavDropdown.Item href="#">Price High To Low</NavDropdown.Item>
        //     <NavDropdown.Item href="#">Popularity</NavDropdown.Item>

        // </NavDropdown>
        
  )
}
export default UserAvatar;