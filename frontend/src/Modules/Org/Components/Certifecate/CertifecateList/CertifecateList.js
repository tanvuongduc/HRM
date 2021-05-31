import React, { Component, useState } from 'react'
import Card from '@material-ui/core/Card';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableBody, Link as MeterialLink } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link as RouterLink } from 'react-router-dom'
import { Http } from "../../../../../Helper/Http";
import OrgService from '../../../Shared/OrgService'

function createData(name, desc) {
    return { name, desc };
}

const rows = [
    createData("Frozen yoghur", 159),
    createData("Ice cream sandwich", 237),
    createData("Eclair", 262),
    createData("Cupcake", 305),
    createData("Gingerbread", 356)
];

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3f50b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


class CertifecateList extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        OrgService.getAllCertifecate().then((res) => {
            console.log(res)
        })
    }
    render() {
        const { path } = this.props.match;
        return (
            <Card className='CertifecateList'>
                <h3>List Certifecates</h3>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Desc</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.desc}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <RouterLink to={`${path}/${index + 1}`}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                            >Sửa
                                        </Button> {' '}
                                        </RouterLink>
                                        <RouterLink to={`${path}/${row.desc}`}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                            >Xóa
                                        </Button>
                                        </RouterLink>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        )
    }
}

export default (CertifecateList);
