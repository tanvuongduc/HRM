import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./ManagementContent.scss";
import { Http } from "../../../../Helper/Http";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddNewUser from "../AddNewUser/AddNewUser";
import LineUser from "./LineUser/LineUser";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { InputAdornment, Paper, TextField } from "@material-ui/core";
import ManagementService from "../../Shared/ManagementService";
import SearchIcon from "@material-ui/icons/Search";

class ManagementContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      onDisplayAddNewUser: false,
      page: 0,
      rowsPerPage: 10,
      searchValue: "",
      onSearchValue: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    ManagementService.getListUsers().then((res) => {
      this.setState({
        listUsers: res.data,
      });
      console.log(res.data);
    });
  };

  onDisplayAddNewUser = () => {
    this.setState({
      onDisplayAddNewUser: true,
    });
  };

  onCloseAddNewUser = () => {
    this.setState({
      onDisplayAddNewUser: false,
    });
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    const rowsPerPage = event.target.value;
    this.setState({
      page: 0,
      rowsPerPage: rowsPerPage,
    });
  };

  handleChangeSearch = (ev) => {
    const value = ev.target.value;
    const { searchValue } = this.state;
    this.setState({
      searchValue: value,
    });
    if(searchValue === "") {
      this.setState({
        onSearchValue: false
      });
    }
  };

  onSearchValue = () => {
    this.setState({
      onSearchValue: true,
    });
  };

  render() {
    let { listUsers, onDisplayAddNewUser, searchValue } =
      this.state;
    const { path } = this.props.match;
    const { page, rowsPerPage, onSearchValue } = this.state;
    if (onSearchValue) {
      listUsers = listUsers.filter((user) => {
        return (
          user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      });
    }

    console.log("Paramss", this.props.match);

    const userItems = listUsers
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((user) => {
        return <LineUser key={user.id} user={user} path={path} />;
      });
    const displayAddNewUser = onDisplayAddNewUser ? (
      <AddNewUser
        onCloseAddNewUser={this.onCloseAddNewUser}
        onSubmitAddNewUser={this.onSubmitAddNewUser}
      />
    ) : (
      ""
    );

    return (
      <div className="management-users-content">
        <div className="add-user">
          <Button
            className="btn-add-user"
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={this.onDisplayAddNewUser}
          >
            Tạo mới nhân viên
          </Button>
        </div>
        <Paper>
          <div className="search-bar">
            <TextField
              className="search-input"
              id="outlined-basic"
              placeholder="Tìm kiếm theo họ tên, mã nhân viên"
              variant="outlined"
              onChange={this.handleChangeSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div className="btn-control-box">
              <Button
                className="btn-control-primary"
                variant="contained"
                color="primary"
                onClick={this.onSearchValue}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
          <TableContainer className="table-container">
            <Table aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell className="table-cell-label">Id</TableCell>
                  <TableCell className="table-cell-label">Họ và tên</TableCell>
                  <TableCell className="table-cell-label">Ngày sinh</TableCell>
                  <TableCell className="table-cell-label">
                    Số điện thoại
                  </TableCell>
                  <TableCell className="table-cell-label">Email</TableCell>
                  <TableCell className="table-cell-label">Team</TableCell>
                  <TableCell className="table-cell-label">Tình trạng</TableCell>
                  <TableCell className="table-cell-label"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{userItems}</TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            labelRowsPerPage="Số hàng mỗi trang"
            rowsPerPageOptions={[10, 20, 50, 100]}
            component="div"
            count={listUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        {displayAddNewUser}
      </div>
    );
  }
}
export default ManagementContent;
