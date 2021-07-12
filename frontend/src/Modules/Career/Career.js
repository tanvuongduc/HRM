import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Overview from './Components/Overview/Overview';

const Career = (props) => {
    const { path } = props.match;
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={Overview} />
            </Switch>
        </div>
    )
}

export default withRouter(Career);
