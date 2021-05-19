import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Http } from "../../../Helper/Http";
import "./AddNewUser.scss";

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        certificate: "",
        socialNetwork: [],
        bank: [],
        status: "",
        teams: []

    };
  }
  
  onChangeData = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  onSubmitAddNewUser = async () => {
      const newUser = this.state;
      const req = await  Http.post("users", newUser);
      console.log(newUser);
      this.props.onCloseAddNewUser();
      this.props.onSubmitAddNewUser();
  }

  render() {
    return (
      <Fragment>
        <div className="management-add-user">
          <div className="add-new-user">
            <h3 className="add-new-user__title">Add new user</h3>
            <div className="add-new-user__input">
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
                  type="text"
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
                  name="adress"
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
            </div>
            <div className="btn-form-control">
                <a className="btn-control-close" onClick={this.props.onCloseAddNewUser}>Close</a>
                <a className="btn-control-save" onClick={this.onSubmitAddNewUser}>Submit</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddNewUser;
