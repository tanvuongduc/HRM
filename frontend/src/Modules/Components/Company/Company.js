import React, { Component } from 'react';
import { Button, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom'
import ModalEdit from './Modal/ModalExample';
import ModalExample from './Modal/ModalExample';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    showDocument() {
        return <ModalExample data={(item) => this.addData(item)} />
    };
    addData(item) {
        this.setState({
            data: item
        });
    };

    render() {
        console.log(this.state.data)
        return (
            <div className="appCompanyContainer">
                <div className="c_header">
                    <div className="textWelcome">
                        <h3>Welcome to Summoner's Rift</h3>
                    </div>
                </div>

                <div className="detailContent">
                    <div className="leftContent">
                        <div className="overView boxContent">
                            <div className="overViewTop">
                                <h3 className="topLeftContent">Overview</h3>
                            </div>
                            <div className="overViewContent">
                                <div className="overViewContentItem">
                                    <h4>2</h4>
                                    <h2>Teams</h2>
                                </div>
                                <div className="overViewContentItem">
                                    <h4>12</h4>
                                    <h2>People</h2>
                                </div>
                                <div className="overViewContentItem">
                                    <h4>10</h4>
                                    <h2>Permanent</h2>
                                </div>
                                <div className="overViewContentItem">
                                    <h4>2</h4>
                                    <h2>Freelancers</h2>
                                </div>
                            </div>
                        </div>
                        <div className="document boxContent">
                            <div className="documentTop">
                                <ModalExample /><h3 className="topLeftContent">Documents</h3>
                            </div>
                            <div className="documentContent">
                                <div className="documentContentItem">
                                    <h3>Company Information</h3>
                                    <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="contact boxContent">
                            <div className="contactTop">
                                <h3 className="topLeftContent">Contact</h3>
                                <Row>
                                    <Col xs='4'><i className="fa fa-phone" />&nbsp;Phone:</Col>
                                    <Col xs='8'>0987123456</Col>
                                </Row>
                                <Row>
                                    <Col xs='4'><i className="fa fa-globe" />&nbsp;Website:</Col>
                                    <Col xs='8'> <a href='http://google.com'>http://google.com</a></Col>
                                </Row>
                                <Row>
                                    <Col xs='4'><i className="fa fa-envelope" />&nbsp;Email:</Col>
                                    <Col xs='8'>anhcachon@gmail.com</Col>
                                </Row>
                                <Row>
                                    <Col xs='4'><i className="fa fa-map-marker" />&nbsp;Adress:</Col>
                                    <Col xs='8'>Hà Nội</Col>
                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;
