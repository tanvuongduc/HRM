import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Department from '../../../Modules/Department/Department';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Exam from '../../../Modules/Exam/Exam';
import MainTeam from '../../../Modules/Team/Components/MainTeam';
// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import Listdepartment from  '../../../Modules/Org/Components/Department/Department'
import ManagementUsers from '../../../Modules/ManagementUsers/ManagementUsers';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <Switch>
                    <Route exact path={`${path}/department`} component={Department} />
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/team`} component={MainTeam} />
                    {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
                    <Route  path={`${path}/department`} exact component={Listdepartment} />
                    {/* <Route  path={`${path}/department/:id`} exact component={Formdepartment} /> */}
                    <Route path={`${path}/management/users`} component={ManagementUsers}/>
            
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
