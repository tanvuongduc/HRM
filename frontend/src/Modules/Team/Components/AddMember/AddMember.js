import React, { Component } from 'react';
import './AddMember.scss';

import {Fragment} from 'react';
import TeamService from '../../Shared/TeamService';

import { ClickAwayListener } from '@material-ui/core';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
            dataListMember: [],
        }
    }

    handleClickAway = () => {
        this.setState({
            setOpen: false
        })
    }
    handleClick = () => {
        this.setState({
            setOpen: !this.state.setOpen
        })
        TeamService.getListUser().then(res =>{
            this.setState({
                dataListMember: res.data
        })})
    }
    addMember = (id)=>{
        this.props.addMemberToTeam(id); 
    }

    render() {
        const {dataListMember} = this.state;
        return (
            <ClickAwayListener onClickAway={() => this.handleClickAway()}>
                <div>
                    <button type="button" onClick={() => this.handleClick()}>
                        Thêm thành viên
                    </button>
                    <div className={this.state.setOpen ? "showList" : "hidenList"}>
                        <h3>Danh sách nhân viên</h3>
                        <TableContainer>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">STT</TableCell>
                                        <TableCell align="center">Họ và Tên</TableCell>
                                        <TableCell align="center">Tùy Chọn</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dataListMember == [] ?
                                        <TableRow><TableCell align="center">Họ và Tên</TableCell></TableRow>
                                        :
                                        <Fragment>
                                            {dataListMember.map((row, index) => (
                                                <TableRow key={index} >
                                                    <TableCell component="th" scope="row" align="center">
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center"
                                                        onClick={() => this.addMember(row.id)}
                                                        className={"pointer"}
                                                    >Thêm</TableCell>
                                                </TableRow>
                                            ))}
                                        </Fragment>
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <button onClick={()=>this.handleClickAway()}>Đóng Form </button>
                    </div >
                </div>
            </ClickAwayListener>
        );
    }
}
export default AddMember