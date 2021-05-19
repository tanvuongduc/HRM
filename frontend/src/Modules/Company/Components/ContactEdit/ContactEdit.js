import React from 'react'
import { Button, Row, Col, } from 'reactstrap';

const ContactEdit = () => {
    return (
        <div className="contact-content">
            <h3>Contact</h3>
            <div className="contact-item">
                <Row>
                    <Col><i className="fa fa-phone" />&nbsp;Phone :  0987123456</Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-globe" />&nbsp;Website :  <a href='http://google.com'>http://google.com</a></Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-envelope" />&nbsp;Email : anhcachon@gmail.com</Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-map-marker" />&nbsp;Adress : Hà Nội</Col>
                </Row>
            </div>
        </div>
    )
}

export default ContactEdit
