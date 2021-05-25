import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Overview from './Components/Overview/Overview';

const Career = () => {
    const path = window.location.pathname;
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={Overview} />
            </Switch>
        </div>
    )
}

export default withRouter(Career);
