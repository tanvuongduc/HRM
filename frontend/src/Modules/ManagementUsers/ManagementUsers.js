import React, { Component } from "react";
import "./ManagementUsers.scss";
import ManagementContent from "./ManagementContent/ManagementContent";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ManagementUserInfo from "./ManagementUserInfo/ManagementUserInfo";
import ManagementEditInfo from "./ManagementEditInfo/ManagementEditInfo";

class ManagementUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsViewedInfo: {},
      userIsChoosed: false,
      userIsChoosedEdit: {},
    };
  }

  onViewUserInfo = (dataUser) => {
    this.setState({
      userIsViewedInfo: dataUser,
      userIsChoosed: true,
    });
  };

  onEditUserInfo = (dataUser) => {
    this.setState({
      userIsChoosed: true,
      userIsChoosedEdit: dataUser,
    });
  };

  render() {
    const { userIsViewedInfo, userIsChoosed, userIsChoosedEdit } = this.state;

    return (
      <BrowserRouter>
        <div className="management-users">
          <div className="row no-gutters">
            <div className="col-sm-12">
              <Switch>
                <Route exact path="/management/users">
                  <ManagementContent
                    onViewUserInfo={this.onViewUserInfo}
                    onEditUserInfo={this.onEditUserInfo}
                  />
                </Route>
                <Route exact path="/management/users/user">
                  {userIsChoosed ? (
                    <ManagementUserInfo userIsViewedInfo={userIsViewedInfo} />
                  ) : (
                    <Redirect to="/management/users" />
                  )}
                </Route>
                <Route exact path="/management/users/edit">
                  {userIsChoosed ? (
                    <ManagementEditInfo userIsChoosedEdit={userIsChoosedEdit} />
                  ) : (
                    <Redirect to="/management/users" />
                  )}
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ManagementUsers;
