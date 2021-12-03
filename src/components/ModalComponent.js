import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FBLogin from './Logins/FacebookLoginComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem,CardBody, CardHeader } from 'reactstrap';
import GLogin from './Logins/GoogleLoginComponent';

class ModelPop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpenLogin: false,
            isModalOpensignup: false,
            isModalOpenForgotPassword: false
        };
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.toggleModalsignup = this.toggleModalsignup.bind(this);
        this.toggleModalForgotPassword = this.toggleModalForgotPassword.bind(this);


        this.handleLogin = this.handleLogin.bind(this);
        this.handlesignup = this.handlesignup.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.handleForgotModalOpen=this.handleForgotModalOpen.bind(this);
        this.handleSigninToSignupModalOpen=this.handleSigninToSignupModalOpen.bind(this);
        this.handleSignupToSigninModalOpen=this.handleSignupToSigninModalOpen.bind(this);
        this.handleForgotToSigninModalOpen=this.handleForgotToSigninModalOpen.bind(this);

    }




    toggleModalLogin() {
        this.setState({
            isModalOpenLogin: !this.state.isModalOpenLogin
        });
    }
    toggleModalsignup() {
        this.setState({
            isModalOpensignup: !this.state.isModalOpensignup
        });
    }
    toggleModalForgotPassword() {
        this.setState({
            isModalOpenForgotPassword: !this.state.isModalOpenForgotPassword
        });
    }




    handleLogin(event) {
        this.toggleModalLogin();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handlesignup(event) {
        this.toggleModalsignup();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }
    handleForgotPassword(event) {
        this.toggleModalForgotPassword();
        // to do
        // message sent
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleForgotModalOpen(event) {
        this.toggleModalLogin();
        this.toggleModalForgotPassword();
    }

    handleSigninToSignupModalOpen(event) {
        this.toggleModalLogin();
        this.toggleModalsignup();
    }
    handleSignupToSigninModalOpen(event) {
        this.toggleModalsignup();
        this.toggleModalLogin();
    }

    handleForgotToSigninModalOpen(event) {
        this.toggleModalForgotPassword();
        this.toggleModalLogin();
    }

    render() {
        return(

            <React.Fragment>

                <Button primary onClick={this.toggleModalLogin} style={{borderRadius:'20px'}}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                    {this.props.auth.isFetching ?
                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                        : null
                    }
                </Button>

                <Modal isOpen={this.state.isModalOpenLogin} toggle={this.toggleModalLogin} centered>
                    <ModalHeader toggle={this.toggleModalLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check className="mt-2">
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                                <Label check className="pull-right">
                                    <a onClick={this.handleForgotModalOpen} className="nav-link">Forgot Password</a>
                                </Label>
                            </FormGroup>
                            <FormGroup className="text-center mt-3 mb-3">
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <FBLogin />
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <GLogin />
                            </FormGroup> 
                            <FormGroup className="text-center">
                                <Label>
                                    Don't have an account?
                                </Label>
                                <Label>
                                    <a onClick={this.handleSigninToSignupModalOpen} className="nav-link">Register</a>
                                </Label>
                            </FormGroup>
                                                       
                        </Form>
                    </ModalBody>
                </Modal>


                <Modal isOpen={this.state.isModalOpensignup} toggle={this.toggleModalsignup} centered>
                    <ModalHeader toggle={this.toggleModalsignup}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlesignup}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check className="mt-2">
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                                
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-center mt-2 mb-3">
                                <Button type="submit" value="submit" color="primary">Register</Button>
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <FBLogin />
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <GLogin />
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Label>
                                    Already have an account?
                                </Label>
                                <Label>
                                    <a onClick={this.handleSignupToSigninModalOpen} className="nav-link">Login</a>
                                </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenForgotPassword} toggle={this.toggleModalForgotPassword} centered>
                    <ModalHeader toggle={this.toggleModalForgotPassword}>Reset Password</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleForgotPassword}>
                            <FormGroup>
                                <Label htmlFor="email" className="mt-2 mb-3 text-center">We will send an email to your box, just follow that link to set your new password.</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup className="text-center mt-4 mb-3">
                                <Button type="submit" value="submit" color="primary">Reset</Button>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Label>
                                    <a onClick={this.handleForgotToSigninModalOpen} className="nav-link">Back to Login</a>
                                </Label>
                            </FormGroup>                          
                        </Form>
                    </ModalBody>
                </Modal>


            </React.Fragment>
        );
    }
}

export default ModelPop;