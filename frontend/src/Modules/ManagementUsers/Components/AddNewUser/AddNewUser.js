import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Http } from "../../../../Helper/Http";
import "./AddNewUser.scss";

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDataUser: {
        name: "",
        birthday: "",
        adress: "",
        certificate: "",
        phone: "",
        email: "",
        socialNetwork: [],
        bank: {},
        status: "Pending",
        teams: [],
      },

    };
  }

  onChangeData = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const { newDataUser } = this.state;
    switch(name) {
      case "name":
        newDataUser.name = value;
        break;
      case "birthday":
        newDataUser.birthday = value;
        break;
      case "address":
        newDataUser.adress = value;
        break;
      case "certificate":
        newDataUser.certificate = value;
        break;
      case "phone":
        newDataUser.phone = value;
        break;
      case "email":
        newDataUser.email = value;
        break;
      case "facebook":
        break;
      case "status":
        newDataUser.status = value;
        break;
      case "team":
        break;
      case "bankName":
        newDataUser.bank.bankName = value;
        break;
      case "bankAccountHolder":
        newDataUser.bank.ownName = value;
        break;
      case "bankAccountNumber":
        newDataUser.bank.bankNumber = value;
        break;
        
    }

    this.setState({
      newDataUser: newDataUser
    });
  };

  onSubmitAddNewUser = async () => {
    const { newDataUser, socialAccount } = this.state;
    console.log("New User", newDataUser);
    console.log("Social network", socialAccount )
    const req = await Http.post("users", newDataUser);
    this.props.onCloseAddNewUser();
    this.props.onSubmitAddNewUser();
  };

  render() {
    return (
      <div className="management-add-user">
        <div className="add-new-user">
          <h3 className="title">Add new user</h3>
          <div className="input">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Username</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Birthday</label>
                  <br></br>
                  <input
                    type="date"
                    name="birthday"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <br></br>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>PhoneNumber</label>
                  <br></br>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <br></br>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Certificate</label>
                  <br></br>
                  <input
                    type="text"
                    name="certificate"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Link Facebook</label>
                  <br></br>
                  <input
                    type="text"
                    name="facebook"
                    className="form-control"
                    onChange={this.onChangeData}
                    
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <br></br>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Team</label>
                  <br></br>
                  <input
                    type="text"
                    name="team"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Bank Name</label>
                  <br></br>
                  <input
                    type="text"
                    name="bankName"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Bank Account Holder</label>
                  <br></br>
                  <input
                    type="text"
                    name="bankAccountHolder"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
                <div className="form-group">
                  <label>Bank Account Number</label>
                  <br></br>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    className="form-control"
                    onChange={this.onChangeData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-form-control">
            <a
              className="btn-control-close"
              onClick={this.props.onCloseAddNewUser}
            >
              Close
            </a>
            <a className="btn-control-save" onClick={this.onSubmitAddNewUser}>
              Submit
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewUser;
