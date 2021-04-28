import React, { Component, Fragment, useState } from "react";
import "./User.scss";
import {
  FaUser,
  FaEnvelope
} from "react-icons/fa";
import Details from "./Details/Details";
import Employment from "./Employment/Employment";
import TimeOff from "./TimeOff/TimeOff";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayDetail: false,
      isDisplayEmployment: true,
      isDisplayTimeOff: false
    };
  }
  showDetails = () => {
      this.setState({
        isDisplayDetail: true,
        isDisplayEmployment: false,
        isDisplayTimeOff: false
      });
      console.log(this.state.isDisplayDetail);
  }
  onShowEmployment = () => {
    this.setState({
      isDisplayEmployment: true,
      isDisplayDetail: false,
      isDisplayTimeOff: false
    })
  }
  
  onShowTimeOff = () => {
    this.setState({
      isDisplayTimeOff: true,
      isDisplayDetail: false,
      isDisplayEmployment: false
    });
  }

  render() {
    var { isDisplayDetail, isDisplayEmployment, isDisplayTimeOff } = this.state;
    var elmDetail = isDisplayDetail 
    ? <Details/> : '';
    var emlEmployment = isDisplayEmployment ? <Employment/> : '';
    var elmTimeOff = isDisplayTimeOff ? <TimeOff/> : ''
    return (
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
              <a
                onClick={this.onShowEmployment}
                className={isDisplayEmployment ? 'onClickNav' : ''}
              >Tổng quan</a>
              <a 
                 onClick={this.showDetails}
                 className={ isDisplayDetail ? 'onClickNav' : ''}
                 >Chi tiết</a>
              <a>Tài liệu</a>
              <a 
                 onClick={this.onShowTimeOff}
                 className={ isDisplayTimeOff ? 'onClickNav' : '' }
              >Thời gian nghỉ</a>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="container">
            {elmDetail}
            {emlEmployment}
            {elmTimeOff}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default User;
