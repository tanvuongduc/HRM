import React from 'react'
import { Button, Row, Col, } from 'reactstrap';

const ContactEdit = ({ data }) => {
    console.log(data)
    const showData = data.map((event, index) => {
        return (
            <div className="contact-item" key={index}>
                <Row>
                    <Col><i className="fa fa-phone" />&nbsp;Phone : {event.phone}</Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-globe" />&nbsp;Website :  <a href={event.domain}>{event.domain}</a></Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-envelope" />&nbsp;Email : {event.email}</Col>
                </Row>
                <Row>
                    <Col><i className="fa fa-map-marker" />&nbsp;Adress : {event.address}</Col>
                </Row>
            </div>
        )
    })
    return (
        <div className="contact-content">
            <h3>Contact</h3>
            {showData}
        </div>
    )
}

export default ContactEdit
