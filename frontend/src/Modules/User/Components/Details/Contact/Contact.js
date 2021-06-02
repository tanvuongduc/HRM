import React, { Component, Fragment } from "react";
import "./Contact.scss";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaEdit,
} from "react-icons/fa";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isDisplayEditInfo = (code, title, value) => {
    this.props.onShowEditInfo(code, title, value);
  };

  render() {
    let { phoneNumber, email, socialNetwork } = this.props;
    // const socialNetworkAcc = socialNetwork.map((s, index) => {
    //   return (
    //     <div className="item-info" key={index}>
    //       <label>{s.title}</label>
    //       <br></br>
    //       <FaFacebook className="info-icon" />
    //       <span>{s.link}</span>
    //     </div>
    //   );
    // });
    return (
      <div className="details-card contact">
        <h4>Contact</h4>
        <div className="item-info">
          <label>Số điện thoại</label>
          <br></br>
          <FaPhoneAlt className="info-icon" />
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
          <FaEnvelope className="info-icon" />
          <span>{email}</span>
          <FaEdit
            className="edit-icon"
            onClick={() => this.isDisplayEditInfo("email", "Email", email)}
          />
        </div>

        {/* {socialNetworkAcc} */}
      </div>
    );
  }
}

export default Contact;
