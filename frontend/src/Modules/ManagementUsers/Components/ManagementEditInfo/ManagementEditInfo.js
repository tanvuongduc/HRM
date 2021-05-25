import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Switch } from "react-router";
import { Http } from "../../../../Helper/Http";
import "./ManagementEditInfo.scss";

class ManagementEditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {
        id: "",
        name: "",
        birthday: "",
        adress: "",
        certificate: "",
        phone: "",
        email: "",
        status: "",
        teams: [],
        bank: {
          bankName: "",
          bankNumber: ""
        }
      },
    };
  }

  componentDidMount = async () => {
    const { userId } = this.props;
    const res = await Http.get("users/user?id=" + userId);
    this.setState({
      dataUser: res.data
    });
  }

  onChangeInputValue = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const { dataUser } = this.state;
    switch(name) {
      case "name":
        dataUser.name = value;
        break;
      case "birthday": 
        dataUser.birthday = value;
        break;
      case "adress":
        dataUser.adress = value;
        break;
      case "certificate":
        dataUser.certificate = value;
        break;
      case "phone":
        dataUser.phone = value;
        break;
      case "email":
        dataUser.email = value;
        break;
      case "status":
        dataUser.status = value;
        break;
      case "bankName":
        dataUser.bank.bankName = value;
        break;
      case "bankNumber":
        dataUser.bank.bankNumber = value;
        break;
      case "ownName":
        dataUser.bank.ownName = value;
        break;
      
    }
    this.setState({
      dataUser: dataUser
    });
  };

  onSaveEditUserInfo = async () => {
    const { dataUser } = this.state;
    const { userId } = this.props;
    const req = await Http.patch("users/" + userId, dataUser);
  };

  render() {
    const { dataUser } = this.state;
    const bank = Object.assign({}, dataUser.bank);
    const { onEditInfo } = this.props;
    const birthday = new Date(dataUser.birthday);
    const month = birthday.getMonth();
    const year = birthday.getFullYear();
    const day = birthday.getDate();
    const birthdayConvert = year +'-'+ (month < 10 ? '0'+month : month) +'-'+ (day < 10 ? '0'+day : day);
    console.log("birthday", birthdayConvert, typeof(birthdayConvert));
     

    return (
        <div className="management-edit-info">
          <h3 className="title">Edit user info</h3>
          <div className="form-edit">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label className="title-input">Username</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    className="form-control input"
                    value={dataUser.name}
                    onChange={this.onChangeInputValue}
                    id="input-info"
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Birthday</label>
                  <br></br>
                  <input
                    type="date"
                    name="birthday"
                    className="form-control input"
                    value={birthdayConvert}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Address</label>
                  <br></br>
                  <input
                    type="text"
                    name="address"
                    className="form-control input"
                    value={dataUser.adress}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Certificate</label>
                  <br></br>
                  <input
                    type="text"
                    name="certificate"
                    className="form-control input"
                    value={dataUser.certificate}
                    onChange={this.onChangeInputValue}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label className="title-input">PhoneNumber</label>
                  <br></br>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input"
                    value={dataUser.phone}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Email</label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    className="form-control input"
                    value={dataUser.email}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Status</label>
                  <br></br>
                  <input
                    type="text"
                    name="status"
                    className="form-control input"
                    value={dataUser.status}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">Team</label>
                  <br></br>
                  <input
                    type="text"
                    name="team"
                    className="form-control input"
                    value={dataUser.teams}
                    onChange={this.onChangeInputValue}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label className="title-input">Bank</label>
                  <br></br>
                  <input
                    type="text"
                    name="bankName"
                    className="form-control input"
                    value={bank.bankName}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">
                    Bank Account Holder
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="ownName"
                    className="form-control input"
                    value={bank.ownName}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title-input">
                    Bank Account Number
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="bankNumber"
                    className="form-control input"
                    value={bank.bankNumber}
                    onChange={this.onChangeInputValue}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-form-control">
            <a className="btn-control-save" onClick={this.onSaveEditUserInfo}>
              Save Change
            </a>
          </div>
        </div>
    );
  }
}

export default ManagementEditInfo;
