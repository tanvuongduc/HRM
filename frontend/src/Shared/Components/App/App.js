import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Exam from '../../../Modules/Exam/Exam';
import Team from '../../../Modules/Team/Team';
import Org from '../../../Modules/Org/Org'
import Certificate from '../../../Modules/Certificate/Certificate'
import ManagementUsers from '../../../Modules/ManagementUsers/ManagementUsers';
import User from '../../../Modules/User/User';
import Department from '../../../Modules/Department/Department';
import AppHeader from '../AppHeader/NavBar/AppHeader'
// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
                <Route path={`${path}/header`} component={AppHeader} />
                <Route path={`${path}/company`} component={Company} />
                <Route path={`${path}/career`} component={Career} />
                <Route path={`${path}/exam`} component={Exam} />
                <Route path={`${path}/team`} component={Team} />
                <Route path={`${path}/org`} component={Org} />
                <Route path={`${path}/department`} component={Department} />
                <Route path={`${path}/certificate`} component={Certificate} />
                <Route path={`${path}/user`} component={User} />
                <Route path={`${path}/management/users`} component={ManagementUsers} />

            </Switch>
        );
    }
}

export default withRouter(App);
