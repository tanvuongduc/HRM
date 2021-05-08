import React from 'react'
import { Button, Row, Col, } from 'reactstrap';

const ContactEdit = () => {
    return (
        <div className="contact-content">
            <h3>Contact</h3>
            <div className="contact-item">
                <Row>
                    <Col xs='2'><i className="fa fa-phone" />&nbsp;Phone :</Col>
                    <Col xs='10'>0987123456</Col>
                </Row>
                <Row>
                    <Col xs='2'><i className="fa fa-globe" />&nbsp;Website :</Col>
                    <Col xs='10'> <a href='http://google.com'>http://google.com</a></Col>
                </Row>
                <Row>
                    <Col xs='2'><i className="fa fa-envelope" />&nbsp;Email :</Col>
                    <Col xs='10'>anhcachon@gmail.com</Col>
                </Row>
                <Row>
                    <Col xs='2'><i className="fa fa-map-marker" />&nbsp;Adress :</Col>
                    <Col xs='10'>Hà Nội</Col>
                </Row>

            </div>
        </div>
    )
}

export default ContactEdit
