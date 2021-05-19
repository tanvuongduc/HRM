import React, { Component, Fragment } from "react";
import "./ManagementUsers.scss";
import { FaUserFriends, FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import ManagementSideBar from "./ManagementSideBar/ManagementSideBar";
import ManagementContent from "./ManagementContent/MangementContent";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ManagementUserInfo from "./ManagementUserInfo/ManagementUserInfo";


class ManagementUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsViewedInfo: {},
      userIsChoosed: false,
 
    };
  }

  onViewUserInfo = (dataUser) => {
    console.log(dataUser);
    this.setState({
      userIsViewedInfo: dataUser,
      userIsChoosed: true,
    });
  };



  render() {
    const { userIsViewedInfo, userIsChoosed } = this.state;
    
    return (
      <BrowserRouter>
        <Fragment>
          <div className="management-users">
            <div className="row no-gutters">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <ManagementSideBar />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <Switch>
                  <Route exact path="/management/users">
                    <ManagementContent onViewUserInfo={this.onViewUserInfo} />
                  </Route>
                  <Route exact path="/management/users/user">
                    {userIsChoosed ? (
                      <ManagementUserInfo userIsViewedInfo={userIsViewedInfo} />
                    ) : (
                      <Redirect to="/management/users" />
                    )}
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default ManagementUsers;
