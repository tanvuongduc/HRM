import React, { Component, Fragment } from "react";
import "./NavBarUser.scss";
import {Switch, NavLink, useRouteMatch} from 'react-router-dom';


class NavBarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isDisplayDetail: false,
        isDisplayEmployment: true,
        isDisplayTimeOff: false,
    };
  }

  onDisplayEmployment = () => {
    this.setState({
      isDisplayEmployment: true,
      isDisplayDetail: false,
    });
  };

  onDisplayDetail = () => {
    this.setState({
      isDisplayDetail: true,
      isDisplayEmployment: false,
    });
  };

  render() {
    var { isDisplayDetail, isDisplayEmployment, isDisplayTimeOff } = this.state;
    return (
      <Fragment>
        <div className="profile-header__navigation">
          <div className="container">
            <NavLink
              to="/user"
              className="nav__item"
              onClick={this.onDisplayEmployment}
              activeStyle={
                isDisplayEmployment
                  ? {
                      display: "block",
                      color: "#19e4d3",
                      borderBottom: "4px solid #19e4d3",
                      backgroundColor: "#125297",
                      paddingBottom: "16px",
                    }
                  : ""
              }
            >
              Tổng quan
            </NavLink>

            <NavLink
              to='/user/details'
              className="nav__item"
              activeStyle={
                isDisplayDetail
                  ? {
                      display: "block",
                      color: "#19e4d3",
                      borderBottom: "4px solid #19e4d3",
                      backgroundColor: "#125297",
                      paddingBottom: "16px",
                    }
                  : ""
              }
              onClick={this.onDisplayDetail}
            >
              Chi tiết
            </NavLink>

            {/* <a 
                 onClick={this.onShowTimeOff}
                 className={ isDisplayTimeOff ? 'onClickNav' : '' }
              >Thời gian nghỉ</a> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavBarUser;
