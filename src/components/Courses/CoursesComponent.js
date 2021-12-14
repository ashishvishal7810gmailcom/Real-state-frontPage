import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import MyBoughtCourses from './CourseSubComponent/MyBoughtCourses';
import MyCreatedCourses from './CourseSubComponent/MyCreatedCourses';
import { Accordion, Button } from 'react-bootstrap';
import CreateCourseModal from './CourseCreateModal/CreateModalComponent';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreateModalOpen: false
        }
    }

    toggleModalCreate = (event) => {
        // event.preventDefault();
        this.setState({
            isCreateModalOpen: !this.state.isCreateModalOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Courses</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-4">
                            <h3>Courses</h3>
                            <hr />
                        </div>
                        <div className="col-8">
                            <Button onClick={this.toggleModalCreate} className="pull-right shadow-none">
                                <span className="fa fa-plus fa-lg"></span>  Create Course
                            </Button>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className="mb-3">
                                    <Accordion.Header>My Bought Courses</Accordion.Header>
                                    <Accordion.Body>
                                        <MyBoughtCourses />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>My Created Courses</Accordion.Header>
                                    <Accordion.Body>
                                        <MyCreatedCourses />
                                    </Accordion.Body>
                                </Accordion.Item> 
                            </Accordion>
                        </div>
                    </div>
                </div>
                <CreateCourseModal isModalOpen={this.state.isCreateModalOpen} 
                    toggleModal={this.toggleModalCreate}
                    courseTags = {this.props.courseTags} 
                />
               
            </React.Fragment>
        );

    }
}

export default Courses;