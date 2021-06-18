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
import AppHeader from '../AppHeader/NavBar/AppHeader';
import MainTeam from '../../../../src/Modules/Team/Components/MainTeam';
import TimeOff from '../../../Modules/TimeOff/TimeOff';
// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                {/* <AppHeader/> */}
                <Switch>
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/team/:id`} component={MainTeam} />
                    <Route path={`${path}/teams`} component={Team} />
                    <Route  path={`${path}/department`} exact component={Department} />
                    <Route path={`${path}/management/users`} component={ManagementUsers}/>
                    <Route path={`${path}/user`} component={User}/>
                    <Route path={`${path}/timeoff`} component={TimeOff} />
            
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
