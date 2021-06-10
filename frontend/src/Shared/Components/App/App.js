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
import add from '../../../Modules/Team/Components/AddMember/AddMember'
import Teams from '../../../Modules/Team/Components/ListTeams/ListTeams'
class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <Switch>
                    {/* <Route exact path={`${path}/department`} component={Department} /> */}
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/team/:id`} component={MainTeam} />
                    <Route path={`${path}/teams`} component={Teams} />
                    <Route path={`${path}/1/add`} component={add} />
                    {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
                    <Route  path={`${path}/department`} exact component={Listdepartment} />
                    {/* <Route  path={`${path}/department/:id`} exact component={Formdepartment} /> */}
                    <Route path={`${path}/management/users`} component={ManagementUsers}/>
                    <Route path={`${path}/user`} component={User}/>
            
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
