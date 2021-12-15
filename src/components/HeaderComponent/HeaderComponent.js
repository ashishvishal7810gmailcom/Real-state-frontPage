import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SearchAS from './SearchASComponent';
import ModelPop from '../AuthComponents/LoginModalComponent';
import autoBind from 'react-autobind';
import Buy from '../SalesComponent/BuyComponent';
import Sell from '../SalesComponent/SellComponent';
import CareTaker from '../SalesComponent/CareTakerComponent';
import Rent from '../SalesComponent/RentComponent';
import Filter from './FilterComponent';
import UserAvatar from './AvatarComponent';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        autoBind(
            this,
            'toggleNav',
            'handleLogout'
          );
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    
    render() {
        
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container mt-2">
                        
                        <div className="row">
                            <div className="col-2 mt-2">
                                <NavbarBrand className="mr-auto" href="/">
                                    <img src="assets/images/logo.jpeg" height="40" width="80"
                                        alt="Ristorante Con Fusion" />
                                </NavbarBrand>
                            </div>
                            <div className="col-7 mt-2">
                                <SearchAS/>
                            </div>
                            <div className="col-1 mt-2">
                                <Filter />
                            </div>
                            <div className="col-2">
                                <UserAvatar />
                            </div>
                            
                            <div className="col-12 mt-4 mb-2">
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/">
                                                <span className="fa fa-home fa-lg"></span> Feeds
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <Buy />
                                        </NavItem>
                                        <NavItem>
                                            <Sell />
                                        </NavItem>

                                        <NavItem>
                                            <Rent />
                                        </NavItem>
                                        <NavItem>
                                            <CareTaker />
                                        </NavItem>
                                    </Nav>
                                    <Nav className="ms-auto" navbar>
                                        <NavItem>
                                            <ModelPop />
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;