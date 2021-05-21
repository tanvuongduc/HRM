import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Switch } from "react-router";
import { Http } from "../../../Helper/Http";
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
    const { userIsChoosedEdit } = await this.props;
    console.log("Props", userIsChoosedEdit);
    this.setState({
      dataUser: userIsChoosedEdit
    });
    console.log("State", this.state.dataUser);
  };

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
      
    }
    this.setState({
      dataUser: dataUser
    });
    console.log("Data User", dataUser);
  };

  onSaveEditUserInfo = async () => {
    const { dataUser } = this.state;
    const req = await Http.patch("users/" + dataUser.id, dataUser);
    console.log("requesst",req);
  };

  render() {
    const { dataUser } = this.state;
    const bank = Object.assign({}, dataUser.bank);
    
    return (
        <div className="management-edit-info">
          <h3 className="title">Edit user info</h3>
          <div className="form-edit">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label className="title">Username</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    className="form-control input"
                    value={dataUser.name}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title">Birthday</label>
                  <br></br>
                  <input
                    type="text"
                    name="birthday"
                    className="form-control input"
                    value={dataUser.birthday}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="title">Address</label>
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
                  <label className="title">Certificate</label>
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
                  <label className="title">PhoneNumber</label>
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
                  <label className="title">Email</label>
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
                  <label className="title">Status</label>
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
                  <label className="title">Team</label>
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
                  <label className="title">Bank</label>
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
                  <label className="title">
                    Bank Account Holder
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="accountHolder"
                    className="form-control input"
                  />
                </div>
                <div className="form-group">
                  <label className="title">
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
