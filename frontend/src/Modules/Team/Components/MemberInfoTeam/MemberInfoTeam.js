import React, { Component } from 'react';
import './MemberInfoTeam.scss';
import {  TableRow, Button ,TableCell } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


class MemberInfoTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  

    render() {
        const { dataMember,index,onDelete } = this.props;
        console.log(this.state.data);
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
                    <Button variant="contained" color="secondary" size="small" startIcon={<Delete />} onClick={() => {onDelete(dataMember._id)}}> Xóa </Button>
                </TableCell>
    
            </TableRow>
        );
    }   
}
export default MemberInfoTeam