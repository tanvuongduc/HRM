import React, { Component, Fragment, useState } from "react";
import "./User.scss";

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

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      emailUser: ''
    };
  }

  receiveInfoUser = (userName, emailUser) => {
     this.setState({
       userName: userName,
       emailUser: emailUser
     });
  }

  render() {
    const { userName, emailUser } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <div className="profile-header">
            <HeaderUser userName={userName} emailUser={emailUser}/>
            <NavBarUser />
          </div>
          <div className="profile-main">
            <div className="container">
              <Switch>
                <Route exact path="/user">
                  <Employment />
                </Route>
                <Route exact path="/user/details">
                  <Details receiveInfoUser={this.receiveInfoUser}/>
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
