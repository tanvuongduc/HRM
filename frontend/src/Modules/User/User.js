import React, { Component, Fragment, useState } from "react";
import "./User.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";
import Details from "./Details/Details";
import Employment from "./Employment/Employment";
import TimeOff from "./TimeOff/TimeOff";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import NavBarUser from "./NavBarUser/NavBarUser";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

 

  render() {
    
    return (
      <BrowserRouter>
        <Fragment>
          <div className="profile-header">
            <div className="profile-header__overview">
              <div className="container">
                <div className="overview__avatarUser">
                  <FaUser className="avatarUser__iconAvatar" />
                </div>
                <div className="overview__info">
                  <h3 className="info__username">Username</h3>
                  <p className="info__email">
                    <FaEnvelope className="email__icon" />
                    username@gmail.com
                  </p>
                </div>
              </div>
            </div>
          <NavBarUser/>
            
          </div>
          <div className="profile-main">
            <div className="container">
              <Switch>
                <Route exact path="/user">
                  <Employment />
                </Route>
                <Route exact path="/user/details">
                  <Details />
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
