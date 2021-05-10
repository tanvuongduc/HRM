import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppSidebar from '../AppSidebar/AppSidebar';
import Department from '../../../Modules/Components/Department/Department';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';
import { Col, Row } from 'reactstrap';
import DetailDepartment from '../../../Modules/Components/Department/DetailDepartment';
import ListMember from '../../../Modules/Components/Department/ListMember';

class App extends React.Component {

    render() {
        const { path } = this.props.match;

        return (
            <div>
                <AppHeader />
                {/*<AppSidebar />*/}
                <Switch>
                    <Route exact path={`${path}/department`} component={Department} />
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                    <Route exact path={`${path}/department/detail`} component={DetailDepartment} />
                    <Route exact path={`${path}/department/detail/:name`} component={ListMember} />
                </Switch>

                {/* <AppFooter /> */}
            </div>
        );
    }
}

export default withRouter(App);
