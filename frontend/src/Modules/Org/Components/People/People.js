import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import MyTeam from './MyTeam/MyTeam';
import User from './User/User';

class People extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="card-people">
                        <div className="list">
                            <div className="border-header">
                                <h1 className="card-name"><b>People</b></h1>
                            </div>
                            <div className="border-list">
                                <div className="list">
                                    <Link className="list-item" to="/people/my-team">Team</Link>
                                    <Link className="list-item" to="/people/user">User</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/people/my-team">
                            <MyTeam/>
                        </Route>
                        <Route path="/people/user">
                            <User/>
                        </Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>

        );
    }
}

export default withRouter(People);