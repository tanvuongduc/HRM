import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ContactEdit from "./components/ContactEdit/ContactEdit";
import DocumentsEdit from "./components/DocumentsEdit/DocumentsEdit";
import OveriewEdit from "./components/OveriewEdit/OveriewEdit.js";

class Company extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="Company">
        <OveriewEdit></OveriewEdit>
        <DocumentsEdit></DocumentsEdit>
        <ContactEdit></ContactEdit>
        {/* <Switch>
          <Route path={`${path}`} component={CompanyEdit} />
        </Switch> */}
      </div>
    );
  }
}

export default Company;
