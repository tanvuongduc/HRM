import React, { Component, Fragment } from "react";
import { FaUserFriends } from 'react-icons/fa';
import './ManagementSideBar.scss';

class ManagementSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <div className="management-users__sidebar">
            <div className="sidebar__nav-users">
              <FaUserFriends className="nav-users__icon" />
              <span className="nav-users__title">Users</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ManagementSideBar;
