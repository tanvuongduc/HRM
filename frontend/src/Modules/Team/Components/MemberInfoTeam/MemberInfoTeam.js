import React, { Component } from 'react';
import './MemberInfoTeam.scss';
import { Fragment } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import DeatailMember from '../DetailMember/DetailMember';
import { ModalConfirm, ModalNoti } from '../../../../Shared';
import TeamService from '../../Shared/TeamService';


class MemberInfoTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onShowDetailMember: false,
            listMemberTeam: [],

            idUserDelete: '',

            confirmMes: '',
            finishMes: '',
        }
    }
    componentDidMount = () => {
        this.getListMemberTeam(this.props.idTeam);
    }
    getListMemberTeam = (id) => {
        TeamService.getListMemberTeam(id).then(res => {
            this.setState({
                listMemberTeam: res.data
            })
        })
    }

    deleteMember = (id) => {
        this.setState({
            confirmMes: 'bạn muốn xóa thành viên này không?',
            idUserDelete: id,
        })
    }
    answerComfirm = (answer) =>{
        if(answer){
            let {idTeam} = this.state;
            let data = [this.state.idUserDelete];
            TeamService.postRemoveMember(idTeam, data).then(res=>{
                if(res.status === 200){
                    this.setState({
                        finishMes: "xóa thành công"
                    })
                }
            });
        }
        this.setState({confirmMes: ''})
    }
    doneDelete = () =>{
        this.setState({finishMes: ''})
    }
    showInfoMember = (id) => {
        this.props.showInfoMemberId(id);
    }

    render() {
        const { listMemberTeam } = this.state;

        return (
            <Grid container className="MemberInfoTeam">
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell align="center">Họ và Tên</TableCell>
                                <TableCell align="center">Trạng Thái</TableCell>
                                <TableCell align="center">Ngày Sinh</TableCell>
                                <TableCell align="center">Số Điện Thoại</TableCell>
                                <TableCell align="center">Tùy Chọn</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listMemberTeam && listMemberTeam.members ?        
                                <Fragment>
                                    {listMemberTeam.members.map((row, index) => (
                                        <TableRow key={index} className={index%2 == 1 ? "odd" : null}>
                                            <TableCell component="th" scope="row" onClick={() => this.showInfoMember(row._id)}>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center" onClick={() => this.showInfoMember(row._id)}>{row.name}</TableCell>
                                            <TableCell align="center" onClick={() => this.showInfoMember(row._id)}>{row.status}</TableCell>
                                            <TableCell align="center" onClick={() => this.showInfoMember(row._id)}>{row.birthday}</TableCell>
                                            <TableCell align="center" onClick={() => this.showInfoMember(row._id)}>{row.phone}</TableCell>
                                            <TableCell align="center" className='pointer'onClick={() => this.deleteMember(row._id)}>
                                                <Button variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        startIcon={<Delete />}> Xóa
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </Fragment>
                                :
                                <TableRow><TableCell align="center">Họ và Tên</TableCell></TableRow>
                                
                            }
                        </TableBody>
                    </Table>
                    <DeatailMember onShowDetailMember={this.state.onShowDetailMember}></DeatailMember>
                    <ModalConfirm message={this.state.confirmMes} answer={this.answerComfirm()}></ModalConfirm>
                    <ModalNoti 
                        message={this.state.finishMes} 
                        done={this.doneDelete()}
                    ></ModalNoti>
                </TableContainer>
            </Grid>
        );
    }
}
export default MemberInfoTeam