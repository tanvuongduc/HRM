import React, { Component, Fragment } from "react";
import "./BasicInfo.scss";
import { FaEdit } from "react-icons/fa";

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      birthday: "",
      address: "",
      certificate: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userName: nextProps.userName,
      birthday: nextProps.birthday,
      address: nextProps.address,
      certificate: nextProps.certificate,
    });
  }

  isDisplayEditInfo = (code, title, value) => {
    console.log(code, title, value);
    this.props.onShowEditInfo(code, title, value);
  };

  render() {
    let { userName, birthday, address, certificate } = this.state;
    return (
      <Fragment>
        <div className="details__card basicInfo">
          <h4>Basic Information</h4>
          <div>
            <div className="item-info">
              <label>Họ và tên</label>
              <br></br>
              <span>{userName}</span>
              <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("username", "Họ và tên", userName)
                }
              />
            </div>
            <div className="item-info">
              <label>Ngày sinh</label>
              <br></br>
              <span>{birthday}</span>
              <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("birthday", "Ngày sinh", birthday)
                }
              />
            </div>
            <div className="item-info">
              <label>Địa chỉ</label>
              <br></br>
              <span>{address}</span>
              <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("address", "Địa chỉ", address)
                }
              />
            </div>
            <div className="item-info">
              <label>Bằng cấp</label>
              <br></br>
              <span>{certificate}</span>
              <FaEdit
                className="edit-icon"
                onClick={() =>
                  this.isDisplayEditInfo("certificate", "Bằng cấp", certificate)
                }
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BasicInfo;
