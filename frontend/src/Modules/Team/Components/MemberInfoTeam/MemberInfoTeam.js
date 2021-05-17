import React, { Component } from 'react';
import './MemberInfoTeam.scss';
import { Fragment } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import DeatailMember from '../DetailMember/DetailMember';


class MemberInfoTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onShowDetailMember: false,
        }
    }
    deleteMember = (id) => {
        this.props.deleteMemberId(id);
    }
    showInfoMember = (id) => {
        this.props.showInfoMemberId(id);
    }

    render() {
        const { dataListMember } = this.props;

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
                            {dataListMember == [] ?
                                <TableRow><TableCell align="center">Họ và Tên</TableCell></TableRow>
                                :
                                <Fragment>
                                    {dataListMember.map((row, index) => (
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
                            }
                        </TableBody>
                    </Table>
                    <DeatailMember onShowDetailMember={this.state.onShowDetailMember}></DeatailMember>
                </TableContainer>
            </Grid>
        );
    }
}
export default MemberInfoTeam