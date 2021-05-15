import React, { Component } from 'react';
import { Fragment } from 'react';
import './MainTeam.scss';

import {Container, Grid, } from '@material-ui/core';
import BasicInfoTeam from './BasicInfoTeam/BasicInfoTeam';
import TeamService from '../Shared/TeamService';


class MainTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
           basicInfoTeam: [],
        }
    }
    componentDidMount =()=>{
        TeamService.getBasicInfoTeam('60912c521618fb2e28b4a984').then(res =>{
            this.setState({
                basicInfoTeam: res.data
            })
            console.log('adfafdf', res.data)
        }   
        )
    }
    render() {
        let {basicInfoTeam} = this.state;
        return (
            <Container maxWidth="lg">
                <BasicInfoTeam data = {basicInfoTeam}></BasicInfoTeam>
                <div className="MemberInfoTeam">

                </div>
            </Container>
        );
    }
}
export default MainTeam