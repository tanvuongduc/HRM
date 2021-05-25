import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import MainTeam from '../../../Modules/Team/Components/MainTeam';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import { Department } from '../../../Modules/Department/Department';
import { DetailDepartment } from '../../../Modules/Department/Components/DetailDepartment/DetailDepartment';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <AppHeader />
                {/* <AppSidebar /> */}
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/team`} component={MainTeam} />
                    {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
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
