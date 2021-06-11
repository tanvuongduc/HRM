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
import CertificateService from '../../Shared/CertificateService'
import ModalConfirm from '../../../../Shared/Components/ModalConfirm/ModalConfirm';

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
    table: {
        flexGrow: 1,
        margin: `auto`,
        border: "1px solid #c3c3c3",
        padding: "50px 50px 50px 50px",
        width: "80%"
    }
})

class CertificateList extends Component {
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
        certifecateArr.push(CertificateService.getAllCertifecate())
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
    render() {
        const { classes } = this.props;
        const { path } = this.props.match;
        const { certifecates, notiConfirm } = this.state
        return (
            <Card >
                <div >
                    <h2 className="certifetace-header">Danh sách chứng chỉ</h2>
                    <div className="certifetace-btn">
                        <RouterLink to={`${path}/0`} >
                            <Button size="small" variant="contained" color="primary" >Thêm mới</Button>
                        </RouterLink>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">STT</StyledTableCell>
                                <StyledTableCell align="center">Tên Trường</StyledTableCell>
                                <StyledTableCell align="center">Mã Trường</StyledTableCell>
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
                                            <RouterLink to={`${path}/${row.id}`}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"

                                                >Sửa
                                                    </Button>{'  '}
                                            </RouterLink>
                                            <Button

                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                                onClick={() => (this.onDelete(row.id))}
                                            >Xóa
                                        </Button>
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

export default withStyles(useStyles)(CertificateList);
