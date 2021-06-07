import React, { Component } from 'react';
import './MemberInfoTeam.scss';
import { Fragment } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


class MemberInfoTeam extends Component {
    constructor(props) {
        super(props);
    }
    deleteMember = (id) => {
        this.props.deleteMemberId(id);
    }
    render() {
        const { dataMember,index ,deleteMember} = this.props;
        return (
            <TableRow key={index}  className={index%2 == 1 ? "old" : null} >
                <TableCell component="th" scope="row">
                    {index + 1}
                </TableCell>
                <TableCell align="center">{dataMember.name}</TableCell>
                <TableCell align="center">{dataMember.status}</TableCell>
                <TableCell align="center">{dataMember.birthday}</TableCell>
                <TableCell align="center">{dataMember.phone}</TableCell>
                <TableCell align="center" className='pointer'>
                    <Button variant="contained" color="secondary" size="small" startIcon={<Delete />} onClick={() => { deleteMember(dataMember.id) }}> Xóa </Button>
                </TableCell>
            </TableRow>
        );
    }   
}
export default MemberInfoTeam