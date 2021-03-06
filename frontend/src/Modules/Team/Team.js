import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MainTeam from "./Components/MainTeam";
import Listteam from "./Components/ListTeams/ListTeams"
class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <div className="Team">
                <Switch>
                    <Route exact path={`${path}`} component={Listteam} />
                    <Route exact path={`${path}/:id`} component={MainTeam} />
                </Switch>
            </div>
        )
    }
}

export default Team
