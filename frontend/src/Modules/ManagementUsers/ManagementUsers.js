import React, { Component } from "react";
import "./ManagementUsers.scss";
import ManagementContent from "./Components/ManagementContent/ManagementContent";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import ManagementUserInfo from "./Components/ManagementUserInfo/ManagementUserInfo";

class ManagementUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUserisChoosed: "",
    };
  }


  render() {
    const managementUserInfo = ({ match }) => (
      <ManagementUserInfo userId={match.params.id}/>
    );
    return (
      <BrowserRouter>
        <div className="management-users">
          <div className="row no-gutters">
            <div className="col-sm-12">
              <Switch>
                <Route exact path="/management/users">
                  <ManagementContent />
                </Route>
                <Route path="/management/users/:id" component={managementUserInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ManagementUsers;
