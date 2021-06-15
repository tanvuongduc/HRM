import React from 'react'
import { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Overview from './Components/Overview/Overview';


class Career extends Component{
    render(){
        const { path } = this.props.match;
        return (
            <div>
                <Switch>
                    <Route exact path={`${path}`} component={Overview} />
                </Switch>
            </div>
        )

    }
}

export default withRouter(Career);
