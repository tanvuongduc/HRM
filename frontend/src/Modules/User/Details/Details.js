import React, { Component, Fragment, useState } from "react";
import "./Details.scss";
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
import { Http } from "../../../Helper/Http";
import BasicInfo from "./BasicInfo/BasicInfo";
import Contact from "./Contact/Contact";
import Banking from "./Banking/Banking";
import EditInfo from "./EditInfo/EditInfo";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      birthday: "",
      address: "",
      certificate: "",
      phoneNumber: "",
      email: "",
      socialNetwork: [],
      bankAccountId: [],
    };
  }

  async componentDidMount() {
    let data = await this.getInfo();
    console.log(this.state);
  }

  async getInfo() {
    const res = await Http.get("users/user", {
      id: "6088cc2b80660b2f2818ae8a",
    });
    this.setState({
      userName: res.data.name,
      birthday: res.data.birthday,
      address: res.data.adress,
      certificate: res.data.certificate,
      phoneNumber: res.data.phone,
      email: res.data.email,
      socialNetwork: res.data.socialNetwork,
      bankAccountId: res.data.bank,
    });
    return res.data;
  }

  render() {
    var {
      userName,
      birthday,
      address,
      certificate,
      phoneNumber,
      email,
      socialNetwork,
      bankAccountId,
    } = this.state;
    return (
      <div>
        <div className="profile-main__details" id="profile-details">
          <div className="row">
            <div className="col-md-4">
              <BasicInfo
                userName={userName}
                birthday={birthday}
                address={address}
                certificate={certificate}
              />
            </div>
            <div className="col-md-4">
              <Contact
                phoneNumber={phoneNumber}
                email={email}
                socialNetwork={socialNetwork}
              />
            </div>
            <div className="col-md-4">
              <Banking bankAccountId={bankAccountId}/>
            </div>
          </div>
          <EditInfo/>
        </div>
      </div>
    );
  }
}
export default Details;
