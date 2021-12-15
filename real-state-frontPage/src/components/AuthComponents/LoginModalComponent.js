import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LoginModal from './Modals/LoginModal';


class ModelPop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return(

            <React.Fragment>

                <Button primary onClick={this.toggleModal} style={{borderRadius:'18px'}}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>

                <LoginModal isModalOpen={this.state.isModalOpen} 
                    toggleModal={this.toggleModal}
                    />
            </React.Fragment>
        );
    }
}

export default ModelPop;