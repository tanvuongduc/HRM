import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class NavListUser extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default NavListUser;