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
    console.log(this.state);
  };

  onCloseEditInfo = () => {
    this.setState({
      isDisplayEditInfo: false,
    });
  };

  render() {
    var { isDisplayEditInfo, titleEdit, valueEdit, codeEdit } = this.state;
    const { dataUser, onSaveEditting } = this.props;
    var elmEditInfo = isDisplayEditInfo ? (
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
        <div className="profile-main__details" id="profile-details">
          {dataUser && dataUser.length != 0 ?
            <Fragment>
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
                  <Banking
                    bankAccount={dataUser.bank}
                    onShowEditInfo={this.onShowEditInfo}
                  />
                </div>
              </div>
              {elmEditInfo}
            </Fragment>
            : null}
        </div>
      </div>
    );
  }
}
export default Details;
