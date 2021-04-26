import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class AppFooter extends Component {
    render() {
        return (
            <Row style={{ margin: '0px' }}>
                <Col xs='12' style={{ background: 'lightblue', padding: '20px', textAlign: 'center' }}>
                    Footer
                </Col>
            </Row>
        );
    }
}

export default AppFooter;
