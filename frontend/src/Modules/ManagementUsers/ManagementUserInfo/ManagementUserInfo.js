import React, { Component, Fragment } from "react";
import "./ManagementUserInfo.scss";
import BasicInfo from "../../User/Details/BasicInfo/BasicInfo";
import Contact from "../../User/Details/Contact/Contact";
import Banking from "../../User/Details/Banking/Banking";
import EditInfo from "../../User/Details/EditInfo/EditInfo";
import { Http } from "../../../Helper/Http";

class ManagementUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayEditInfo: false,
      codeEdit: "",
      titleEdit: "",
      valueEdit: "",
    };
  }

  onShowEditInfo = (code, title, value) => {
    this.setState({
      isDisplayEditInfo: true,
      codeEdit: code,
      titleEdit: title,
      valueEdit: value,
    });
  };

  onSaveEditting = async (data) => {
    const idUserEditted = data.id;
    const req = await Http.patch("users/" + idUserEditted, data);
  };

  onCloseEditInfo = () => {
    this.setState({
      isDisplayEditInfo: false,
    });
  };

  render() {
    const { isDisplayEditInfo, codeEdit, titleEdit, valueEdit } = this.state;
    const { userIsViewedInfo } = this.props;
    const displayEditInfo = isDisplayEditInfo ? (
      <EditInfo
        data={userIsViewedInfo}
        codeEdit={codeEdit}
        titleEdit={titleEdit}
        valueEdit={valueEdit}
        onSaveEditting={this.onSaveEditting}
        onCloseEditInfo={this.onCloseEditInfo}
      />
    ) : (
      ""
    );
    return (
      <div className="management-user-info">
        <div className="user-info">
          <h2 className="title">User info</h2>
          <div className="detail">
            <div className="row">
              <div className="col-sm-4">
                <BasicInfo
                  userName={userIsViewedInfo.name}
                  birthday={userIsViewedInfo.birthday}
                  address={userIsViewedInfo.adress}
                  certificate={userIsViewedInfo.certificate}
                  onShowEditInfo={this.onShowEditInfo}
                />
              </div>
              <div className="col-sm-4">
                <Contact
                  phoneNumber={userIsViewedInfo.phone}
                  email={userIsViewedInfo.email}
                  socialNetwork={userIsViewedInfo.socialNetwork}
                  onShowEditInfo={this.onShowEditInfo}
                />
              </div>
              <div className="col-sm-4">
                <Banking
                  bankAccount={userIsViewedInfo.bank}
                  onShowEditInfo={this.onShowEditInfo}
                />
              </div>
            </div>
          </div>
        </div>
        {displayEditInfo}
      </div>
    );
  }
}

export default ManagementUserInfo;
