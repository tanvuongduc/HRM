import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import AllTeam from './AllTeam/AllTeam';
import MyTeam from './MyTeam/MyTeam';
import People from './People';
import User from './User/User';

class RouteURL extends Component {
    render() {
        return (
            <div>
            <People />
            <Switch>
                <Route path="/people" component={User} />
                <Route path="/my-team" component={MyTeam} />
                <Route path="/user" component={User} />
            </Switch>
            </div>
        );
    }
}

export default withRouter(RouteURL);