import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import User from './Components/User/User';
import MyTeam from './Components/MyTeam/MyTeam';


class People extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="card-people">
                        <div className="container">
                            <div className="list">
                                <div className="border-header">
                                    <h1 className="card-name"><b>People</b></h1>
                                </div>
                                <div className="border-list">
                                    <div className="list">
                                        <Link className="list-item" to="/people">Team</Link>
                                        <Link className="list-item" to="/people/user">User</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/people">
                            <MyTeam/>
                        </Route>
                        <Route exact path="/people/user">
                            <User/>
                        </Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>

        );
    }
}

export default withRouter(People);