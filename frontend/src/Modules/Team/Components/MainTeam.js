import React, { Component } from 'react';
import './MainTeam.scss';

import { Card, ClickAwayListener, Container, Grid, Button } from '@material-ui/core';
import { ExitToApp, AddCircleOutline } from '@material-ui/icons';

import BasicInfoTeam from './BasicInfoTeam/BasicInfoTeam';
import TeamService from '../Shared/TeamService';
import MemberInfoTeam from './MemberInfoTeam/MemberInfoTeam';
import AddMember from './AddMember/AddMember';
import Details from '../../User/Components/Details/Details';
import AddMemberToTeam from '../../User/Components/AddMemberToTeam/AddMemberToTeam';
import BasicInfo from '../../User/Components/Details/BasicInfo/BasicInfo';
import Contact from '../../User/Components/Details/Contact/Contact';


class MainTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basicInfoTeam: {},
            listMemberTeam: [],

            idTeam: '60b4bc4f14272f11107d2fff',

            idUSer: '',
            dataUser: [],

            ////control form
            setOpen: false,
            setOpenChoiceUserToTeam: false,
        }
    }
    getListMemberTeam = (id) => {
        TeamService.getListMember(id).then(res => {
            this.setState({ listMemberTeam: res.data })
        })
    }

    componentDidMount = () => {
        TeamService.getBasicInfoTeam(this.state.idTeam).then(res => {
            this.setState({ basicInfoTeam: Array(res.data) })
        })
        this.getListMemberTeam(this.state.idTeam);
    }
    deleteMemberId = (id) => {
        const data = {
            "members": [id]
        }
        TeamService.postRemoveMember(this.state.idTeam, data).then(
            this.getListMemberTeam(this.state.idTeam)
        )
    }
    showInfoMemberId = (id) => {
        TeamService.getUserInfo(id).then(res => {
            this.setState({
                dataUser: res.data,
                idUSer: id,
                setOpenUserInfo: true,
            })
        })
    }

    addMemberToTeam = (id) => {
        const idTeam = this.state.idTeam;
        const data = { "members": id }
        TeamService.postAddMember(idTeam, data);
        this.getListMemberTeam(this.state.idTeam);
    }
    getInfo = () => {
        console.log('hello world');
    }
    ///// controler form
    controlFormUserInfo = () => {
        this.setState({ setOpenUserInfo: false })
        console.log('helllo mama')
    }
    controlFormAddUser = () => {
        this.setState({ setOpenChoiceUserToTeam: false })
        console.log('dm con tho')
    }
    onOpenFormAddUser = () => {
        this.setState({ setOpenChoiceUserToTeam: true })
        console.log('adffadsfkljasdlkfjlkajflkjasdlk')
    }

    render() {
        let { basicInfoTeam, listMemberTeam, dataUser, idUser, setOpenUserInfo, setOpenChoiceUserToTeam } = this.state;
        return (
            <Container maxWidth="lg" className="MainTeam">
                <BasicInfoTeam data={basicInfoTeam}></BasicInfoTeam>
                <Card className="InfoTeam">
                    <Grid container className="header">
                        <Grid item xs={10}>
                            <h3>Thông tin thành viên team</h3>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<AddCircleOutline />}
                                onClick={() => this.onOpenFormAddUser()}>
                                Thêm thành viên
                            </Button>
                            <ClickAwayListener>
                                <div className={!setOpenChoiceUserToTeam ? "noneDisplay" : "inforUser"}>
                                    <AddMemberToTeam></AddMemberToTeam>
                                </div>
                            </ClickAwayListener>
                        </Grid>
                    </Grid>
                    <MemberInfoTeam
                        dataListMember={listMemberTeam.members ? listMemberTeam.members : []}
                        deleteMemberId={this.deleteMemberId}
                        showInfoMemberId={this.showInfoMemberId}
                    ></MemberInfoTeam>
                </Card>
                <ClickAwayListener onClickAway={() => this.controlFormUserInfo()}>
                    <Card className={!setOpenUserInfo ? "noneDisplay" : "infor"}>
                        <BasicInfo
                            userName={dataUser.name}
                            birthday={dataUser.birthday}
                            address={dataUser.adress}
                            certificate={dataUser.certificate}
                            onShowEditInfo={this.onShowEditInfo}
                        />
                        <hr></hr>
                        <Contact
                            phoneNumber={dataUser.phone}
                            email={dataUser.email}
                            socialNetwork={dataUser.socialNetwork}
                            onShowEditInfo={this.onShowEditInfo}
                        />
                        <div className="end">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => this.controlFormUserInfo()}
                                startIcon={<ExitToApp />}> Đóng
                            </Button>
                        </div>
                    </Card>
                </ClickAwayListener>
            </Container>
        );
    }
}
export default MainTeam