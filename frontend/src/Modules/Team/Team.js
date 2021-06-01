import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MainTeam from "./Components/MainTeam";

class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}`} component={MainTeam} />
                {/* <Route exact path={`${path}`} component={MainTeam} /> */}
            </Switch>
        )
    }
}

export default Team