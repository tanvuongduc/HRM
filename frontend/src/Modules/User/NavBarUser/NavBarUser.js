import React, { Component, Fragment } from "react";
import "./NavBarUser.scss";
import { Switch, NavLink, useRouteMatch } from "react-router-dom";

class NavBarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 
  render() {
    
    return (
      <Fragment>
        <div className="profile-header__navigation">
          <div className="container">
            <NavLink
              exact
              to="/user"
              className="nav__item"
              activeStyle={{
                display: "block",
                color: "#19e4d3",
                borderBottom: "4px solid #19e4d3",
                backgroundColor: "#125297",
                paddingBottom: "16px"
              }}
             
            >
              Tổng quan
            </NavLink>

            <NavLink
              to="/user/details"
              className="nav__item"
              activeStyle={{
                display: "block",
                color: "#19e4d3",
                borderBottom: "4px solid #19e4d3",
                backgroundColor: "#125297",
                paddingBottom: "16px",
              }}
         
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
