import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DepartmentList from "./Components/List/List";
import FormDepartment from "./Components/Detail/Formdepartment";

class Department extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="Department">
                <Switch>
                    <Route exact path={`${path}`} component={DepartmentList} />
                    <Route exact path={`${path}/:id`} component={FormDepartment} />
                </Switch>
            </div>
        );
    }
}

export default Department;
