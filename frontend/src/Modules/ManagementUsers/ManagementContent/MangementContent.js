import React, { Component, Fragment } from "react";
import "./ManagementContent.scss";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

class ManagementContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [
        {
          id: 1,
          username: "Dang Jinner",
          email: "dangjinner.business@gmail.com",
          team: ["Developer"],
        },
        {
          id: 2,
          username: "Dang Jinner",
          email: "dangjinner.business@gmail.com",
          team: ["Developer"],
        },
      ],
    };
  }

  render() {
    const { listUsers } = this.state;
    const userItems = listUsers.map((user) => {
      return (
        <tr className="content__table-item" key={user.id}>
          <td className="table-item__selected">
            <input type="checkbox" />
          </td>
          <td className="table-item__id">{user.id}</td>
          <td className="table-item__username">{user.username}</td>
          <td className="table-item__email">{user.email}</td>
          <td className="table-item__team">{user.team}</td>
          <th className="table-item__view-detail">
            <AiFillEye />
          </th>
          <th className="table-item__edit">
            <FaRegEdit />
          </th>
          <th className="table-item__delete">
            <FaTimes className="table-item__delete-icon" />
          </th>
        </tr>
      );
    });
    return (
      <Fragment>
        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <div className="management-users__content">
            <table className="table table-striped">
              <thead className="content__table-header">
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Team</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="content__table-body">{userItems}</tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ManagementContent;
