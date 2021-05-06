import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class ListUser extends Component {
    render() {
        return (
            <Row>
                <Col xs="3" className="style-col-list-user-left">
                    Nghiêm Thọ Đô
                </Col>
                <Col xs="2" className="style-col-list-user-center">Leader</Col>
                <Col xs="2" className="style-col-list-user-center">team1</Col>
                <Col xs="5" className="style-col-list-user-left">thiết kế giao diện</Col>
            </Row>
        );
    }
}

export default ListUser;