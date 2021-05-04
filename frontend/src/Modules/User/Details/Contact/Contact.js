import React, { Component, Fragment } from "react";
import "./Contact.scss";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaMoneyCheckAlt,
} from "react-icons/fa";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { phoneNumber, email, socialNetwork } = this.props;
    const socialNetworkAcc = socialNetwork.map((s, index) => {
      return (
        <div className="item-info" key={index}>
          <label>{s.title}</label>
          <br></br>
          <FaFacebook className="item-info__icon" />
          <span>{s.link}</span>
        </div>
      );
    });
    return (
      <Fragment>
        <div className="details__card contact">
          <h4>Contact</h4>
          <div className="item-info">
            <label>Số điện thoại</label>
            <br></br>
            <FaPhoneAlt className="item-info__icon" />
            <span>{phoneNumber}</span>
          </div>

          <div className="item-info">
            <label>Email cá nhân</label>
            <br></br>
            <FaEnvelope className="item-info__icon" />
            <span>{email}</span>
          </div>

          {socialNetworkAcc}
        </div>
      </Fragment>
    );
  }
}

export default Contact;
