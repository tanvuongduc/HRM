import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Department from '../../../Modules/Department/Department';
import Company from '../../../Modules/Company/Company';
import Career from '../../../Modules/Career/Career';

class App extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <Switch>
                    <Route exact path={`${path}/department`} component={Department} />
                    <Route exact path={`${path}/company`} component={Company} />
                    <Route exact path={`${path}/career`} component={Career} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
