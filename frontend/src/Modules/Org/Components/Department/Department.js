import React, { Component, Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { TableRow, Button } from "@material-ui/core";
import Departmentservice from "../../Shared/Departmentservice"
import { withStyles } from '@material-ui/core/styles';
import ModalConfirm from '../../../../Shared/Components/ModalConfirm/ModalConfirm';
import { Link } from "react-router-dom";
import { Delete } from '@material-ui/icons';

const useStyles = (theme) => ({
  btn: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    float: "right",
  },
  row:{
    margin: `auto`,
  },
  table: {
    flexGrow: 1,
    margin: `auto`,
    border :"1px solid #c3c3c3",
    padding :"50px 50px 50px 50px",
    width :"80%"
  },
  title: {
    margin: `auto`,
    padding :"50px 50px 50px 50px",
    width :"80%"
  }

})


class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      notiConfirm: '',
      listDepartment: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  // list data   
  getData() {
    let promiseArr = [];
    promiseArr.push(Departmentservice.listDepartment());
    Promise.all(promiseArr).then(([list_Department]) => {
      let listDepartment = list_Department.data;
      this.setState({
        listDepartment
      });
    })
      .catch((err) => {
        this.setState({
          notiMessage: 'Lỗi vui lòng bạn thử lại sau !!'
        })
        console.log(err);
      });
  }

  onDelete = (id) => {
    this.setState({
      notiConfirm: 'Bạn có chắc chắn muốn xóa !!',
      id: id
    })

  };
  answer = (isYes) => {
    if (isYes) {
      let data = {
        id: this.state.id
      }
      console.log(data);
      Departmentservice.deleteDepartment(data)
        .then((response) => {
          this.setState({ notiConfirm: '' })
          this.getData();
        }).catch((err) => {
          this.setState({
            notiMessage: 'Lỗi vui lòng bạn thử lại sau !!'
          })
          console.log(err);
        });
    } else {
      this.setState({ notiConfirm: '' })
    }
  }

  render() {
    const { classes } = this.props;
    let { listDepartment } = this.state;
    console.log(listDepartment);
    return (
      <Fragment>
        <div><h2 className={classes.title}>Danh sách phòng ban</h2></div>
        <TableContainer  className={classes.table}>
          <Table aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell><strong>Mã phòng ban</strong></TableCell>
                <TableCell align="right"><strong>Tên phòng ban</strong></TableCell>
                <TableCell align="right"><strong>Trưởng phòng</strong></TableCell>
                <TableCell align="right"><strong>Chú thích</strong></TableCell>
                <TableCell><div className={classes.btn}><Button size="small" variant="contained" color="primary" href="./department/0">Thêm mới</Button></div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {listDepartment.map((item, i) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.code}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.pic.name}</TableCell>
                  <TableCell align="right">{item.desc}</TableCell>
                  <TableCell >
                    <div className={classes.btn}>
                      <Link to={`department/${item.id}`}>
                        <Button size="small" variant="contained" color="primary" >Sửa</Button>
                      </Link>
                    </div>
                    <div className={classes.btn}>
                      <Button variant="contained" color="secondary" size="small" startIcon={<Delete />}>Xóa</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ModalConfirm message={this.state.notiConfirm} answer={this.answer}></ModalConfirm>
      </Fragment>
    );
  }
}
export default withStyles(useStyles)(Department);
