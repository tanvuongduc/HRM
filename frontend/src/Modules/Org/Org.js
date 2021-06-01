import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Department from './Components/Department/Department';
import FormDepartment from './Components/Department/Formdepartment';

class Org extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}`} render={() =>
                    (<Redirect to="/app/org/department" ></Redirect>)
                }></Route>
                <Route exact path={`${path}/department`} component={Department} />
                <Route exact path={`${path}/department/:id`} component={FormDepartment} />
            </Switch>
        )
    }
}

export default withRouter(Org)