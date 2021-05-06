import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CareerEdit from "./Components/CareerEdit/CareerEdit";

class Career extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="Career">
                <Switch>
                    <Route path={`${path}`} component={CareerEdit} />
                </Switch>
            </div>
        );
    }
}

export default Career;