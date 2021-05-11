import React, { Component, Fragment, useState } from "react";
import "./User.scss";
import { Http } from "../../Helper/Http";
import Details from "./Details/Details";
import Employment from "./Employment/Employment";
import TimeOff from "./TimeOff/TimeOff";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBarUser from "./NavBarUser/NavBarUser";
import HeaderUser from "./HeaderUser/HeaderUser";
import ChangeAvatar from "./HeaderUser/ChangeAvatar/ChangeAvatar";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      emailUser: "",
      dataUser: {
        name: "",
        birthday: "",
        adress: "",
        certificate: "",
        phone: "",
        email: "",
        socialNetwork: [],
        bank: [],
        status: "Pendding",
        avatar: "",
      },
    };
  }

  async componentDidMount() {
    await this.getInfo();
  }
  receiveInfoUser = (userName, emailUser) => {
    this.setState({
      userName: userName,
      emailUser: emailUser,
    });
  };

  async getInfo() {
    const res = await Http.get("users/user", {
      id: "6088cc2b80660b2f2818ae8a",
    });
    await this.setState({
      dataUser: res.data,
    });
  }
  async updateInfo(data) {
    const req = await Http.patch("users/6088cc2b80660b2f2818ae8a", data);
    console.log(req);
  }
  onSaveEditting = async (data) => {
    console.log(data);
    await this.setState({
      dataUser: data,
    });
    this.updateInfo(data);
  };
  async uploadAvatar(data, type) {
    let option = {
      data: data,
      type: type,
    };
    const res = await Http.post(
      "users/upload/avatar?id=6088cc2b80660b2f2818ae8a",
      option
    );
    console.log(res);
  }

  render() {
    const { dataUser } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <div className="profile-header">
            <HeaderUser
              avatar={dataUser.avatar}
              userName={dataUser.name}
              emailUser={dataUser.email}
              uploadAvatar={this.uploadAvatar}
            />
            <NavBarUser />
          </div>
          <div className="profile-main">
            <div className="container">
              <Switch>
                <Route exact path="/user">
                  <Employment />
                </Route>
                <Route exact path="/user/details">
                  <Details
                    getInfo = {()=>this.getInfo()}
                    dataUser={dataUser}
                    onSaveEditting={this.onSaveEditting}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default User;
