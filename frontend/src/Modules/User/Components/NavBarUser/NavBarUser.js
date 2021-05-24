import React, { Component, Fragment } from "react";
import "./NavBarUser.scss";
import { Switch, NavLink, useRouteMatch } from "react-router-dom";

class NavBarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-header-navigation">
        <div className="container">
          <NavLink
            to="/user"
            className="nav-item"
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
        </div>
      </div>
    );
  }
}

export default NavBarUser;
