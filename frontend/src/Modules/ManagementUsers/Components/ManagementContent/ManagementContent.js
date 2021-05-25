import React, { Component, Fragment } from "react";
import "./ManagementContent.scss";
import { Http } from "../../../../Helper/Http";
import AddNewUser from "../AddNewUser/AddNewUser";
import LineUser from "./LineUser/LineUser";
import MessageAddNewUser from "../MessageAddNewUser/MessageAddNewUser";

class ManagementContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      onDisplayAddNewUser: false,
      onSubmitAddNewUser: false,
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

  render() {
    const { listUsers, onDisplayAddNewUser, onSubmitAddNewUser } = this.state;
    const userItems = listUsers.map((user) => {
      return (
        <LineUser
          key={user.id}
          user={user}
        />
      );
    });
    const displayAddNewUser = onDisplayAddNewUser ? (
      <AddNewUser
        onCloseAddNewUser={this.onCloseAddNewUser}
        onSubmitAddNewUser={this.onSubmitAddNewUser}
      />
    ) : (
      ""
    );
    const messageAddNewUser = onSubmitAddNewUser ? <MessageAddNewUser /> : "";
    return (
      <div className="management-users-content">
        <div className="add-user">
          <a className="btn-add-user" onClick={this.onDisplayAddNewUser}>
            Add new user
          </a>
        </div>

        <table className="table table-striped">
          <thead className="table-header">
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">{userItems}</tbody>
        </table>
        {displayAddNewUser}
        {messageAddNewUser}
      </div>
    );
  }
}
export default ManagementContent;
