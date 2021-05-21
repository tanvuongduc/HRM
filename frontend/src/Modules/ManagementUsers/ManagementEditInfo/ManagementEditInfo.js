import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Http } from "../../../Helper/Http";
import "./ManagementEditInfo.scss";

class ManagementEditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},
    };
  }

  componentDidMount() {
      const { userIsChoosedEdit } = this.props;
    console.log("Props", userIsChoosedEdit);
    this.setState({
      dataUser: {
        id: userIsChoosedEdit.id,
        name: userIsChoosedEdit.name,
        birthday: userIsChoosedEdit.birthday,
        adress: userIsChoosedEdit.adress,
        certificate: userIsChoosedEdit.certificate,
        phone: userIsChoosedEdit.phone,
        email: userIsChoosedEdit.email,
        status: userIsChoosedEdit.status,
        teams: userIsChoosedEdit.teams,
        bank: {
          bankName: userIsChoosedEdit.bank.bankName,
          bankNumber: userIsChoosedEdit.bank.bankName,
        },
      },
    });
  };

  onChangeInputValue = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "bankName" && name === "bankNumber") {
      this.setState({
        dataUser: {
          bank: {
            [name]: value
          },
        },
      });
    } else {
      this.setState({
        dataUser: {
          [name]: value,
        },
      });
    }
  };

  onSaveEditUserInfo = async () => {
    const { userIsChoosedEdit } = this.props;
    const dataUser = this.state;
    const req = await Http.patch("users/" + userIsChoosedEdit.id, this.state);
  };

  render() {
    const { dataUser } = this.state;
    console.log(Object.byString(dataUser, dataUser.bank.bankName ));
    return (
      <Fragment>
        <div className="management-edit-info">
          <h3 className="management-edit-info__title">Edit user info</h3>
          <div className="management-edit-info__form">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="form-group">
                  <label className="form-edit__title">Username</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-edit__input"
                    value={dataUser.name}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Birthday</label>
                  <br></br>
                  <input
                    type="text"
                    name="birthday"
                    className="form-control form-edit__input"
                    value={dataUser.birthday}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Address</label>
                  <br></br>
                  <input
                    type="text"
                    name="address"
                    className="form-control form-edit__input"
                    value={dataUser.adress}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Certificate</label>
                  <br></br>
                  <input
                    type="text"
                    name="certificate"
                    className="form-control form-edit__input"
                    value={dataUser.certificate}
                    onChange={this.onChangeInputValue}
                  />
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="form-group">
                  <label className="form-edit__title">PhoneNumber</label>
                  <br></br>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-edit__input"
                    value={dataUser.phone}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Email</label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-edit__input"
                    value={dataUser.email}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Status</label>
                  <br></br>
                  <input
                    type="text"
                    name="status"
                    className="form-control form-edit__input"
                    value={dataUser.status}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">Team</label>
                  <br></br>
                  <input
                    type="text"
                    name="team"
                    className="form-control form-edit__input"
                    value={dataUser.teams}
                    onChange={this.onChangeInputValue}
                  />
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="form-group">
                  <label className="form-edit__title">Bank</label>
                  <br></br>
                  <input
                    type="text"
                    name="bankName"
                    className="form-control form-edit__input"
                    value={bankName}
                    onChange={this.onChangeInputValue}
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">
                    Bank Account Holder
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="accountHolder"
                    className="form-control form-edit__input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-edit__title">
                    Bank Account Number
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    className="form-control form-edit__input"
                    // value={dataUser.bank.bankNumber}
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
      </Fragment>
    );
  }
}

export default ManagementEditInfo;
