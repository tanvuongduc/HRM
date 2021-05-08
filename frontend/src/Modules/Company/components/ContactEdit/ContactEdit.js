import React from 'react'

const ContactEdit = () => {
    return (
        <div className="rightContent">
            <div className="contact boxContent">
                <div className="contactTop">
                    <h3 className="topLeftContent">Contact</h3>
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
        </div>
    )
}

export default ContactEdit
