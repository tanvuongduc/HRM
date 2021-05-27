import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppSidebar from '../AppSidebar/AppSidebar';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Org from '../../../Modules/Org/Org'
import Listdepartment from  '../../../Modules/Org/Components/Department/Department'
import Formdepartment from '../../../Modules/Org/Components/Department/Formdepartment'


class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <AppHeader />
                {/* <AppSidebar /> */}
                <Switch>
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route  path={`${path}/org`} exact component={Org} />
                    <Route  path={`${path}/department`} exact component={Listdepartment} />
                    <Route  path={`${path}/department/:id`} exact component={Formdepartment} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);
