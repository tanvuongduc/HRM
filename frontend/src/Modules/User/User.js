import React, { Component, Fragment, useState } from "react";
import "./User.scss";
import { Http } from "../../Helper/Http";
import Details from "./Components/Details/Details";
import Employment from "./Components/Employment/Employment";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBarUser from "./Components/NavBarUser/NavBarUser";
import HeaderUser from "./Components/HeaderUser/HeaderUser";
import UserService from "./Shared/UserService";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {
        avatar: ""
      },
    };
  }

   componentDidMount = async () =>  {
     await this.getInfo();
  }

  getInfo = async () => {
    const userId = JSON.parse(localStorage.getItem("userId")) ;
    await UserService.getMyInfo(userId).then((res) => {
      this.setState({
        dataUser: res.data,
      });
    });
  }

  async updateInfo(data) {
    const req = await Http.patch("users/60ba34061f194c0c78c99338", data);
  }

  onSaveEditInfo = (data) => {
    console.log("DATAAAAA", data);
    this.updateInfo(data);
  }

  async uploadAvatar(data, type) {
    let option = {
      data: data,
      type: type,
    };
    const res = await Http.post(
      "users/upload/avatar?id=6088cc2b80660b2f2818ae8a",
      option
    );
  }

  render() {
    const { dataUser } = this.state;
    const { path } = this.props.match;
    return (
      <BrowserRouter>
        <div className="profile-header">
          <HeaderUser
            avatar={dataUser.avatar}
            userName={dataUser.name}
            emailUser={dataUser.email}
            uploadAvatar={this.uploadAvatar}
          />
          <NavBarUser path={path} />
        </div>
        <div className="profile-main">
          <div className="container">
            <Switch>
              <Route exact path={`${path}`}>
                <Details
                  getInfo={() => this.getInfo()}
                  dataUser={dataUser}
                  onSaveEditInfo={this.onSaveEditInfo}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default User;
