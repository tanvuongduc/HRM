import React, { Component } from 'react';
import './MainTeam.scss';

import {Container, Grid, } from '@material-ui/core';
import BasicInfoTeam from './BasicInfoTeam/BasicInfoTeam';
import TeamService from '../Shared/TeamService';
import MemberInfoTeam from './MemberInfoTeam/MemberInfoTeam';
import AddMember from './AddMember/AddMember';


class MainTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
           basicInfoTeam: [],
           listMemberTeam: [],
        }
    }
    componentDidMount =()=>{
        TeamService.getBasicInfoTeam('60a017be2e215a1788c61565').then(res =>{
            this.setState({
                basicInfoTeam: res.data
            })})
        TeamService.getListMemberTeam('60a017be2e215a1788c61565').then(res =>{
            this.setState({
                listMemberTeam: res.data
            })})
    }
    deleteMemberId = (id) =>{
        const data = {
            "members": id 
        }
        TeamService.postRemoveMember('60a017be2e215a1788c61565', data)
        console.log(id);
    }
    showInfoMemberId = (id) =>{
        console.log('infor id', id);
    }
    addMemberToTeam =(id)=>{
        const idTeam = '60a017be2e215a1788c61565';
        const data = {"members": id}
        TeamService.postAddMember(idTeam, data);
    }
    render() {
        let {basicInfoTeam, listMemberTeam} = this.state;
        return (
            <Container maxWidth="lg">
                <BasicInfoTeam data = {basicInfoTeam}></BasicInfoTeam>
                <Grid container>
                        <Grid item xs={10}>
                            <h3>Thông tin thành viên team</h3>
                        </Grid>
                        <Grid item xs={2}>
                            <AddMember addMemberToTeam = {this.addMemberToTeam}></AddMember>
                        </Grid>
                    </Grid>
                <MemberInfoTeam
                    dataListMember = {listMemberTeam.members? listMemberTeam.members: []}
                    deleteMemberId = {this.deleteMemberId}
                    showInfoMemberId = {this.showInfoMemberId}
                ></MemberInfoTeam>
            </Container>
        );
    }
}
export default MainTeam