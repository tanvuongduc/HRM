import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="header-user">
                    <h3 className="number-people"><b>2 people</b></h3>
                    <div className="btn-edit">
                        <button className="button1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16" color="rgb(0, 105, 209)">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                            </svg>
                        </button>
                        <button className="button2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16" color="rgb(0, 105, 209)">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </button>
                        <select>
                            <option>EVERYONE</option>
                            <option>...</option>
                        </select>
                        <select>
                            <option>ADD A PERSON</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div className="list-user">
                    <Row>
                        <Col xs='0'>
                            <form>
                                <input className="checkbox" type="checkbox" id="" name="" value=""/>
                            </form>
                        </Col>
                        <Col xs='3'>
                            <select>
                                <option className="tieude">NAME</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col>
                            <select>
                                <option>LINE MANAGER</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col>
                            <select>
                                <option>TEAM</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col>
                            <select>
                                <option>OFFICE</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col>
                            <select>
                                <option>PERMISSIONS</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col>
                            <select>
                                <option>STATUS</option>
                                <option>...</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='0'>
                            <form>
                                <input className="checkbox" type="checkbox" id="" name="" value=""/>
                            </form>
                        </Col>
                        <Col xs="3">
                            Nghiêm Thọ Đô
                        </Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                    </Row>
                    <Row>
                        <Col xs='0'>
                            <form>
                                <input className="checkbox" type="checkbox" id="" name="" value=""/>
                            </form>
                        </Col>
                        <Col xs="3">
                            Nghiêm Thọ Đô
                        </Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                        <Col>âf</Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default User;