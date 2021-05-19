import React, { Component, Fragment } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./ManagementSideBar.scss";

class ManagementSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="management-users__sidebar">
          <NavLink
            to="/management/users"
            activeStyle={{
              backgroundColor: "rgb(36, 82, 209)"
            }}
          >
            <div className="sidebar__nav-users">
              <FaUserFriends className="nav-users__icon" />
              <span className="nav-users__title">Users</span>
            </div>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default ManagementSideBar;
