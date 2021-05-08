import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CompanyEdit from "./components/CompanyEdit/CompanyEdit";

class Company extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="Company">
        <Switch>
          <Route path={`${path}`} component={CompanyEdit} />
        </Switch>
      </div>
    );
  }
}

export default Company;