import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import AllTeam from './AllTeam/AllTeam';
import MyTeam from './MyTeam/MyTeam';
import User from './User/User';

class People extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="card-people">
                        <div className="list">
                            <h1 className="card-name"><b>People</b></h1>
                            <ul className="list-people">
                                <li className="list-people-item"><Link to="/people/all-team"><b>ALL</b></Link> </li>
                                <li className="list-people-item"><Link to="/people/my-team"><b>TEAM</b></Link> </li>
                                <li className="list-people-item"><Link to="/people/user"><b>USER</b></Link> </li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/people/all-team">
                            <AllTeam/>
                        </Route>
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