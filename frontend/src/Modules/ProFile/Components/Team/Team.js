import React, { Component, Fragment } from 'react';
import './Team.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeamHeader from './TeamHeader/TeamHeader';
import InfoTeam from './TeamBody/InfoTeam/InfoTeam';
import ListMember from './TeamBody/ListMember/ListMember';
import TableMember from './TeamBody/ListMember/TableMember';
class Team extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <TeamHeader/>
                    <div className="team-body">
                        <div className="team-body_overview">
                            <div className="container">
                                <InfoTeam/>
                                {/* <ListMember/>   */}
                                <br/>
                                <TableMember/>                              
                            </div>
                        </div>
                    </div>
                    {/* <Switch>
                        <Route exact path="team">

                        </Route>
                    </Switch> */}
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Team;