import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
<<<<<<< HEAD
import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import Company from '../../../Modules/Company/Company';
import Department from '../../../Modules/Department/Department';
=======
import AppSidebar from '../AppSidebar/AppSidebar';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import { Department } from '../../../Modules/Department/Department';
import { DetailDepartment } from '../../../Modules/Department/Components/DetailDepartment/DetailDepartment';
>>>>>>> main

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
<<<<<<< HEAD
            <div className="App">
                {/* <AppHeader></AppHeader> */}
                <Switch>
                    <Route path={`${path}/company`} component={Company} />
                    <Route path={`${path}/department`} component={Department} />
=======
            <div>
                <AppHeader />
                {/* <AppSidebar /> */}
                <Switch>
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/department`} component={Department} />
                    <Route exact path={`${path}/department/detail:id`} component={DetailDepartment} />
>>>>>>> main
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);
