import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Formdepartments from '../Org/Components/Department/Formdepartment'
import Listdepartment from  '../Org/Components/Department/Department'

class Org extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { path } = this.props.match;
        return (
            <div className="department">
                <Switch>
                    <Route path={`${path}/org/department/:id`} exact component={Formdepartments} />
                    <Route path={`${path}/department`} exact component={Listdepartment} />
                </Switch>
            </div>
        );
    }
}

export default Org;