import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import SearchAS from './SearchASComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem,CardBody, CardHeader } from 'reactstrap';
import ModelPop from './LoginModalComponent';
import Avatar from 'react-avatar';
import { NavDropdown} from 'react-bootstrap';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogout() {
        this.props.logoutUser();
    }

    
    
    render() {
        const Popup = () => {
            alert(this.props.fetchSuggestions);
        }
        
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container mt-2">
                        
                        <div className="row">
                            <div className="col-2 mt-2">
                                <NavbarBrand className="mr-auto" href="/">
                                    <img src="assets/images/logo.png" height="40" width="60"
                                        alt="Ristorante Con Fusion" />
                                </NavbarBrand>
                            </div>
                            <div className="col-8 mt-2">
                                <SearchAS fetchSearches={this.props.fetchSearches}/>
                            </div>
                            <div className="col-2">
                                <Nav navbar className="pull-right">
                                    {this.props.auth.isAuthenticated ?

                                        <NavDropdown title={
                                            <Avatar name={this.props.auth.user.username} size="42" 
                                                textSizeRatio="2"
                                                round='20'
                                                fgColor='#fff'
                                                maxInitials='2'
                                                className="round"
                                                // color="lightgreen"
                                            />
                                            } 
                                            id="collasible-nav-dropdown"
                                        >
                                            {/* pass the props */}
                                            <NavDropdown.Item href={`${this.props.auth.user.username}`}>Profile</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/home" onClick={this.handleLogout}>Logout</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/chat">Chat</NavDropdown.Item>                                                                              
                                        </NavDropdown>
                                        :
                                        null
                                    }
                                </Nav>
                            </div>
                            
                            <div className="col-12 mt-4 mb-2">
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <span className="fa fa-home fa-lg"></span> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/addusers">
                                                <span className="fa fa-user-plus fa-lg"></span> Add Users
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/favorites">
                                                <span className="fa fa-heart fa-lg"></span> My Favorites
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink className="nav-link" to="/myteams">
                                                <span className="fa fa-users fa-lg"></span> My Teams
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="ms-auto" navbar>
                                        <NavItem>
                                            { !this.props.auth.isAuthenticated ?
                                                <ModelPop auth={this.props.auth}
                                                    loginUser={this.props.loginUser} 
                                                    logoutUser={this.props.logoutUser} 
                                                    signupUser={this.props.signupUser}
                                                    />
                                                :
                                                <div>
                                                <Button primary onClick={this.handleLogout} style={{borderRadius:'20px'}}>
                                                    <span className="fa fa-sign-out fa-lg"></span> Logout
                                                    {this.props.auth.isFetching ?
                                                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                        : null
                                                    }
                                                    {/* to do
                                                        create a dashboard on ONclick
                                                    */}
                                                </Button>
                                                </div>
                                            }

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