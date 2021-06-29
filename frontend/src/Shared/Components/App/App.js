import React, { Component } from "react";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core";
import Company from "../../../Modules/Company/Company";
import Career from "../../../Modules/Career/Career";
import Exam from "../../../Modules/Exam/Exam";
import Team from "../../../Modules/Team/Team";
import Org from "../../../Modules/Org/Org";
import Certificate from "../../../Modules/Certificate/Certificate";
import ManagementUsers from "../../../Modules/ManagementUsers/ManagementUsers";
import User from "../../../Modules/User/User";
import Department from "../../../Modules/Department/Department";
import AppHeader from "../AppHeader/NavBar/AppHeader";
import MainTeam from "../../../../src/Modules/Team/Components/MainTeam";
import TimeOff from "../../../Modules/TimeOff/TimeOff";
import Sidebar2 from "../AppHeader/Sidebar2/Sidebar2";
import './App.scss';

// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      showSideBar: false
    }
  }
  showSideBar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  }
  render() {
    const { path } = this.props.match;
    const { showSideBar } = this.state;
    return (
      <BrowserRouter>
        <div>
          <AppHeader showSideBar={this.showSideBar} path={path} />
          <div className="main-content" style={{ animation: showSideBar ? "divSwitchSide 500ms ease-in forwards" : "divSwitch 500ms ease-in forwards" }}>
            <Switch>
              <Route exact path={`${path}/company`} component={Company} />
              <Route exact path={`${path}/career`} component={Career} />
              <Route exact path={`${path}/exam`} component={Exam} />
              <Route path={`${path}/team/:id`} component={MainTeam} />
              <Route path={`${path}/teams`} component={Team} />
              <Route path={`${path}/department`} exact component={Department} />
              <Route
                path={`${path}/management/users`}
                component={ManagementUsers}
              />
              <Route path={`${path}/user`} component={User} />
              <Route path={`${path}/timeoff`} component={TimeOff} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
