import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link as RouterLink } from 'react-router-dom'
import CertifecateService from '../../Shared/CertificateService'
import { ModalConfirm } from '../../../../Shared';

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

const useStyles = (theme) => ({
    card: {
        margin: `100px`,
    },
    header: {
        display: `inline-block`,
        margin: `20px`
    },
    btn: {
        float: `right`,
        margin: `0px 5px`,
    }
})

class CertifecateList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            certifecates: [],
            notiConfirm: ''
        }
    }
    componentDidMount() {
        let certifecateArr = []
        certifecateArr.push(CertifecateService.getAllCertifecate())
        Promise.all(certifecateArr).then(([res]) => {
            let certifecates = res.data
            this.setState({
                certifecates
            })
        })
    }
    onDelete = (id) => {
        this.setState({
            id,
            notiConfirm: 'Bạn có chắc chắn muốn xóa !!'
        })

    }
    answer = (isYes) => {
        const { id } = this.state
        if (isYes) {
            console.log(id)
        } else {
            this.setState({
                notiConfirm: ''
            })
        }
    }
    render() {
        const { classes } = this.props;
        const { path } = this.props.match;
        const { certifecates, notiConfirm } = this.state
        return (
            <Card className={classes.card}>
                <h2 className={classes.header}>Danh sách chứng chỉ</h2>
                <div className={classes.btn}>
                    <RouterLink to={`${path}/create`} >
                        <Button size="small" variant="contained" color="primary" >Thêm mới</Button>
                    </RouterLink>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">STT</StyledTableCell>
                                <StyledTableCell align="center">Tên Chứng chỉ</StyledTableCell>
                                <StyledTableCell align="center">Mã Chứng chỉ</StyledTableCell>
                                <StyledTableCell align="center">Xếp Loại</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                certifecates.map((row, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.code}</StyledTableCell>
                                        <StyledTableCell align="center">{row.desc}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                className={classes.btn}
                                                startIcon={<DeleteIcon />}
                                                onClick={() => (this.onDelete(row.id))}
                                            >Xóa
                                            </Button>
                                            <RouterLink to={`${path}/${row.id}`}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.btn}
                                                >Sửa
                                                </Button>
                                            </RouterLink>

                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ModalConfirm message={notiConfirm} answer={this.answer}></ModalConfirm>
            </Card>
        )
    }
}

export default withStyles(useStyles)(CertifecateList);
