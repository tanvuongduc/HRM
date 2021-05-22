import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppSidebar from '../AppSidebar/AppSidebar';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Formdepartment from '../../../Modules/Org/Components/Department/Formdepartment';
import Listdepartment from '../../../Modules/Org/Components/Department/Listdepartment'
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
                    <Route exact path={`${path}/org/department/:id`} component={Formdepartment} />
                    <Route exact path={`${path}/org/listdepartment`} component={Listdepartment} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);
