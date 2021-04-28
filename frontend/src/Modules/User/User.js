import React, { Component, Fragment, useState } from "react";
import "./User.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";
import Details from "./Details/Details";
import Employment from "./Employment/Employment";
import TimeOff from "./TimeOff/TimeOff";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayDetail: false,
      isDisplayEmployment: true,
      isDisplayTimeOff: false,
    };
  }
  showDetails = () => {
    this.setState({
      isDisplayDetail: true,
      isDisplayEmployment: false,
      isDisplayTimeOff: false,
    });
    console.log(this.state.isDisplayDetail);
  };
  onShowEmployment = () => {
    this.setState({
      isDisplayEmployment: true,
      isDisplayDetail: false,
      isDisplayTimeOff: false,
    });
  };

  onShowTimeOff = () => {
    this.setState({
      isDisplayTimeOff: true,
      isDisplayDetail: false,
      isDisplayEmployment: false,
    });
  };

  render() {
    var { isDisplayDetail, isDisplayEmployment, isDisplayTimeOff } = this.state;
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

            <div className="profile-header__navigation">
              <div className="container">
                <Link to="/user">
                    Tổng quan
                </Link>

                <Link to="/user/details">
                    Chi tiết
                </Link>

                {/* <a 
                 onClick={this.onShowTimeOff}
                 className={ isDisplayTimeOff ? 'onClickNav' : '' }
              >Thời gian nghỉ</a> */}
              </div>
            </div>
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
