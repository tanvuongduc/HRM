import React, { Component, Fragment } from 'react';
import './Team.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeamHeader from './TeamHeader/TeamHeader';
import InfoTeam from './TeamBody/InfoTeam/InfoTeam';
import {Http} from '../../../../Helper/Http';
import Table from '../../../../Shared/Components/DataTable/Table';
class Team extends Component {
    constructor(props){
        super(props)
        this.state={
            data : {}
        }
    }
    async componentDidMount(){
        let res = await Http.get('teams/team?id=609bab7ff64eb20544584ee9');
        let data = res.data;
        this.setState({
            data : data
        })
    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <TeamHeader/>
                    <div className="team-body">
                        <div className="team-body_overview">
                            <div className="container">
                                <InfoTeam data = {this.state.data}/> 
                                <br/>  
                                <Table/>                             

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