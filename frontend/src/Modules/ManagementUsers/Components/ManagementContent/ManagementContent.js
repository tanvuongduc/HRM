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
import { Paper } from "@material-ui/core";

class ManagementContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      onDisplayAddNewUser: false,
      onSubmitAddNewUser: false,
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await Http.get("users");
    this.setState({
      listUsers: res.data,
    });
    console.log(res.data);
  };

  onDisplayAddNewUser = () => {
    this.setState({
      onDisplayAddNewUser: true,
    });
  };

  onSubmitAddNewUser = () => {
    this.setState({
      onSubmitAddNewUser: true,
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

  render() {
    const { listUsers, onDisplayAddNewUser, onSubmitAddNewUser } = this.state;
    const { path } = this.props.match;
    const { page, rowsPerPage } = this.state;
    const userItems = listUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
      return <LineUser key={user.id} user={user} path={path}/>;
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
            Add new user
          </Button>
        </div>

        <Paper>
          <TableContainer className="table-container">
            <Table aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell className="table-cell-label">Id</TableCell>
                  <TableCell className="table-cell-label">Username</TableCell>
                  <TableCell className="table-cell-label">Birthday</TableCell>
                  <TableCell className="table-cell-label">
                    Phone number
                  </TableCell>
                  <TableCell className="table-cell-label">Email</TableCell>
                  <TableCell className="table-cell-label">Team</TableCell>
                  <TableCell className="table-cell-label">Status</TableCell>
                  <TableCell className="table-cell-label"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{userItems}</TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 20, 50]}
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
