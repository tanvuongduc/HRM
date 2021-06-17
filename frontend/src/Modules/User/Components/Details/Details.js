import React, { Component, Fragment, useState } from "react";
import "./Details.scss";
import BasicInfo from "./BasicInfo/BasicInfo";
import Contact from "./Contact/Contact";
import Banking from "./Banking/Banking";
import EditInfo from "./EditInfo/EditInfo";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayEditInfo: false,
      codeEdit: "",
      titleEdit: "",
      valueEdit: "",
    };
  }

  async componentDidMount() {
    this.props.getInfo();
  }

  onShowEditInfo = (code, title, value) => {
    this.setState({
      isDisplayEditInfo: true,
      codeEdit: code,
      titleEdit: title,
      valueEdit: value,
    });
  };

  onCloseEditInfo = () => {
    this.setState({
      isDisplayEditInfo: false,
    });
  };

  render() {
    const { isDisplayEditInfo, titleEdit, valueEdit, codeEdit } = this.state;
    const { dataUser, onSaveEditting } = this.props;
    let elmEditInfo = isDisplayEditInfo ? (
      <EditInfo
        codeEdit={codeEdit}
        titleEdit={titleEdit}
        valueEdit={valueEdit}
        data={dataUser}
        onSaveEditting={(data) => onSaveEditting(data)}
        onCloseEditInfo={this.onCloseEditInfo}
      />
    ) : (
      ""
    );

    return (
      <div>
        <div className="profile-main-details" id="profile-details">
          <div className="row">
            <div className="col-md-4">
              <BasicInfo
                userName={dataUser.name}
                birthday={dataUser.birthday}
                address={dataUser.adress}
                certificate={dataUser.certificate}
                onSaveEditInfo={this.props.onSaveEditInfo}
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
              <Banking
                bankAccount={dataUser.bank}
                onShowEditInfo={this.onShowEditInfo}
              />
            </div>
          </div>
          {elmEditInfo}
        </div>
      </div>
    );
  }
}
export default Details;
