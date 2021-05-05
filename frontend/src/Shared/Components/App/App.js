import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import Company from '../../../Modules/Company/Company';
import Department from '../../../Modules/Department/Department';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                {/* <AppHeader></AppHeader> */}
                <Switch>
                    <Route path={`${path}/company`} component={Company} />
                    <Route path={`${path}/department`} component={Department} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);