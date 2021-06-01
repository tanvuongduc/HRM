import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Exam from '../../../Modules/Exam/Exam';
import MainTeam from '../../../Modules/Team/Components/MainTeam';
import Org from '../../../Modules/Org/Org'
import ManagementUsers from '../../../Modules/ManagementUsers/ManagementUsers';
import User from '../../../Modules/User/User';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
                <Route path={`${path}/company`} component={Company} />
                <Route path={`${path}/career`} component={Career} />
                <Route path={`${path}/exam`} component={Exam} />
                <Route path={`${path}/team`} component={MainTeam} />
                <Route path={`${path}/org`} component={Org} />
                {/* <Route path={`${path}/department`} component={Listdepartment} /> */}
                <Route path={`${path}/management/users`} component={ManagementUsers} />
                <Route path={`${path}/user`} component={User} />

            </Switch>
        );
    }
}

export default withRouter(App);
