import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DepartmentEdit from "./component/DepartmentEdit/DepartmentEdit";
import MenberEdit from "./component/menber/MenberEdit";

class Department extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="Department">
                <Switch>
                    <Route exact path={`${path}`} component={DepartmentEdit} />
                    <Route exact path={`${path}/menber`} component={MenberEdit} />
                </Switch>
            </div>
        );
    }
}

export default Department;