import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppSidebar from '../AppSidebar/AppSidebar';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import { Department } from '../../../Modules/Department/Department';
import { DetailDepartment } from '../../../Modules/Department/Components/DetailDepartment/DetailDepartment';

class App extends Component {
    render() {
        const { path } = this.props.match;
<<<<<<< HEAD
=======

>>>>>>> 364b98a2fd9333d2134a921cf6ab4c9d20adab4a
        return (
            <div>
                <AppHeader />
                {/* <AppSidebar /> */}
                <Switch>
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/department`} component={Department} />
                    <Route exact path={`${path}/department/detail:id`} component={DetailDepartment} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);
