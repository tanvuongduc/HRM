
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Overview from './Components/Overview/Overview';
import CareerList from "./Components/CareerList/CareerList";


class Career extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}`} component={Overview} />
                <Route exact path={`${path}/:id`} component={CareerList} />
            </Switch>
        );
    }
}

export default Career;