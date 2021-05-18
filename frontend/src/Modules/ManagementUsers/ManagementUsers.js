import React, { Component, Fragment } from "react";
import "./ManagementUsers.scss";
import { FaUserFriends, FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import ManagementSideBar from "./ManagementSideBar/ManagementSideBar";
import ManagementContent from "./ManagementContent/MangementContent";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import ManagementUserInfo from "./ManagementUserInfo/ManagementUserInfo";

class ManagementUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="management-users">
            <div className="row no-gutters">
              <ManagementSideBar />
              <Switch>
                <Route exact path="/management/users">
                  <ManagementContent />
                </Route>
                <Route exact path="/management/users/user">
                  <ManagementUserInfo/>
                </Route>
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default ManagementUsers;
