import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class NavListUser extends Component {
    render() {
        return (
            <div>
                    <Row>
                        <Col xs='3' className="style-col-list-user-left">
                            <select>
                                <option className="tieude">NAME</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col xs="2" className="style-col-list-user-center">
                            <select>
                                <option>REGENCY</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col  xs="2" className="style-col-list-user-center">
                            <select>
                                <option>TEAM</option>
                                <option>...</option>
                            </select>
                        </Col>
                        <Col xs="5" className="style-col-list-user-center">
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