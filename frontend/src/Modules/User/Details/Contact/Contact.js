import React, { Component, Fragment } from "react";
import "./Contact.scss";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaEdit
} from "react-icons/fa";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  

  isDisplayEditInfo = (code, title, value) => {
    console.log(code, title, value);
    this.props.onShowEditInfo(code, title, value);
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
            <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("phoneNumber", "PhoneNumber", phoneNumber)
                }
              />
          </div>

          <div className="item-info">
            <label>Email cá nhân</label>
            <br></br>
            <FaEnvelope className="item-info__icon" />
            <span>{email}</span>
            <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("email", "Email", email)
                }
              />
          </div>

          {socialNetworkAcc}
        </div>
      </Fragment>
    );
  }
}

export default Contact;
