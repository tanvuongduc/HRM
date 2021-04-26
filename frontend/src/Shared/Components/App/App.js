import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppSidebar from '../AppSidebar/AppSidebar';
import Department from '../../../Modules/Components/Department/Department';
import Company from '../../../Modules/Components/Company/Company';
import Career from '../../../Modules/Components/Career/Career';
import { Col, Row } from 'reactstrap';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <AppHeader />
                <Row style={{ margin: '0px' }}>
                    <Col xs='2'>
                        <AppSidebar />
                    </Col>
                    <Col xs='10' style={{ background: 'red' }}>
                        <Switch>
                            <Route exact path={`${path}/department`} component={Department} />
                            <Route exact path={`${path}/company`} component={Company} />
                            <Route exact path={`${path}/career`} component={Career} />
                        </Switch>
                    </Col>
                </Row>
                <AppFooter />
            </div>
        );
    }
}

export default withRouter(App);
