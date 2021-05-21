import React, { Component, Fragment } from "react";
import "./ManagementContent.scss";
import { Http } from "../../../Helper/Http";
import AddNewUser from "../AddNewUser/AddNewUser";
import LineUser from "./LineUser/LineUser";
import MessageAddNewUser from "../AddNewUser/MessageAddNewUser/MessageAddNewUser";

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

  onViewUserInfo = (dataUser) => {
    this.props.onViewUserInfo(dataUser);
  };


  getUsers = async () => {
    const res = await Http.get("users");
    this.setState({
      listUsers: res.data,
    });
    console.log(this.state);
  };

  onDisplayAddNewUser = () => {
    this.setState({
      onDisplayAddNewUser: true,
    });
  };

  onSubmitAddNewUser = () => {
    this.setState({
      onSubmitAddNewUser: true
    });
  }

  onCloseAddNewUser = () => {
    this.setState({
      onDisplayAddNewUser: false
    });
  }

  render() {
    const { listUsers, onDisplayAddNewUser, onSubmitAddNewUser } = this.state;
    const userItems = listUsers.map((user) => {
      return (
        <LineUser
          user={user}
          onViewUserInfo={this.onViewUserInfo}
          onEditUserInfo={this.props.onEditUserInfo}
        />
      );
    });
    const displayAddNewUser = onDisplayAddNewUser ? <AddNewUser onCloseAddNewUser={this.onCloseAddNewUser} onSubmitAddNewUser={this.onSubmitAddNewUser}/> : "";
    const messageAddNewUser = onSubmitAddNewUser ? <MessageAddNewUser/> : "";
    return (
      <Fragment>
        <div className="management-users__content">
          <div className="management-users__add-user">
            <a
              className="management-users__add-user"
              onClick={this.onDisplayAddNewUser}
            >
              Add new user
            </a>
          </div>

          <table className="table table-striped">
            <thead className="content__table-header">
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
            <tbody className="content__table-body">{userItems}</tbody>
          </table>
          {displayAddNewUser}
          {messageAddNewUser}
        </div>
      </Fragment>
    );
  }
}
export default ManagementContent;
