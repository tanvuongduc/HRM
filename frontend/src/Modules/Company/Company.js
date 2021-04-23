import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DetailsEdit from "./Compoments/Details/DetailsEdit";
import PreviewsEdit from "./Compoments/Preview/PreviewEdit";

class Company extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="">
        <Switch>
          <Route path={`${path}/detail`} component={DetailsEdit} />
          <Route path={`${path}`} component={PreviewsEdit} />
        </Switch>
      </div>
    );
  }
}

export default Company;