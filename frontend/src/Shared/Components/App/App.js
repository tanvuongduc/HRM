import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Department from '../../../Modules/Department/Department';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import Exam from '../../../Modules/Exam/Exam';
import MainTeam from '../../../Modules/Team/Components/MainTeam';
// import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import Listdepartment from '../../../Modules/Org/Components/Department/Department'
import Org from '../../../Modules/Org/Org';

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
                    <Route exact path={`${path}/team`} component={MainTeam} />
                    <Route exact path={`${path}/org/certifecate`} component={Org} />
                    {/* <Route path={`${path}/notauthorized`} component={NotAuthorized} /> */}
                    <Route path={`${path}/department`} exact component={Listdepartment} />
                    {/* <Route path={`${path}/department/:id`} exact component={Formdepartment} /> */}
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
