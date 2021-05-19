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
      dataUser: {
        name: '',
        birthday: '',
        adress: '',
        certificate: '',
        phone: '',
        email: '',
        socialNetwork: [],
        bank: [],
        status: "Pendding",
      },
      userName: "",
      birthday: "",
      address: "",
      certificate: "",
      phoneNumber: "",
      email: "",
      socialNetwork: [],
      bankAccountId: [],
      isDisplayEditInfo: false,
      codeEdit: "",
      titleEdit: "",
      valueEdit: "",
    };
  }

  async componentDidMount() {
    let data = await this.getInfo();
  }

  async getInfo() {
    const res = await Http.get("users/user", {
      id: "6088cc2b80660b2f2818ae8a",
    });
    this.props.receiveInfoUser(res.data.name, res.data.email);
    await this.setState({
      dataUser:res.data
    });
    console.log(this.state)
    return res.data;
  }

  async updateInfo(data) {
    
    const req = await Http.patch("users/6088cc2b80660b2f2818ae8a", data);
    console.log(req);
  }

  onShowEditInfo = (code, title, value) => {
    this.setState({
      isDisplayEditInfo: true,
      codeEdit: code,
      titleEdit: title,
      valueEdit: value,
    });
    console.log(this.state);
  };

  onCloseEditInfo = () => {
    this.setState({
      isDisplayEditInfo: false,
    });
  };

  onSaveEditting = async (data) => {
    console.log(data);
    await this.setState({
      dataUser: data
    })
    this.updateInfo(data);
  };
  render() {
    var {
      dataUser,
      isDisplayEditInfo,
      titleEdit,
      valueEdit,
      codeEdit
    } = this.state;

    var elmEditInfo = isDisplayEditInfo ? (
      <EditInfo
        codeEdit={codeEdit}
        titleEdit={titleEdit}
        valueEdit={valueEdit}
        data = {dataUser}
        onSaveEditting={(data)=>this.onSaveEditting(data)}
        onCloseEditInfo={this.onCloseEditInfo}
      />
    ) : (
      ""
    );

    return (
      <div>
        <div className="profile-main__details" id="profile-details">
          <div className="row">
            <div className="col-md-4">
              <BasicInfo
                userName={dataUser.name}
                birthday={dataUser.birthday}
                address={dataUser.adress}
                certificate={dataUser.certificate}
                onShowEditInfo={this.onShowEditInfo}
              />
            </div>
            <div className="col-md-4">
              <Contact
                phoneNumber={dataUser.phone}
                email={dataUser.email}
                socialNetwork={dataUser.socialNetwork}
                onShowEditInfo={this.onShowEditInfo}
              />
            </div>
            <div className="col-md-4">
              <Banking bankAccountId={dataUser.bank} />
            </div>
          </div>
          {elmEditInfo}
        </div>
      </div>
    );
  }
}
export default Details;
