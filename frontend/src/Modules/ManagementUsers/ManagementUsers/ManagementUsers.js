import React, { Component } from "react";
import "./ManagementUsers.scss";
import ManagementContent from "./Components/ManagementContent/ManagementContent";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import ManagementUserInfo from "./Components/ManagementUserInfo/ManagementUserInfo";

class ManagementUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { path } = this.props.match;
    return (
      <BrowserRouter>
        <div className="management-users">
          <Switch>
            <Route exact path={`${path}`} component={ManagementContent} />
            <Route exact path={`${path}/:id`} component={ManagementUserInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(ManagementUsers);
