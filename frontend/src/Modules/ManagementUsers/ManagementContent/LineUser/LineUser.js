import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./LineUser.scss";

class LineUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const { user } = this.props;
    return (
      <Fragment>
        <tr className="content__table-item" key={user.id}>
          <td className="table-item__selected">
            <input type="checkbox" />
          </td>
          <td className="table-item__id">{user.id}</td>
          <td className="table-item__username">{user.name}</td>
          <td className="table-item__email">{user.email}</td>
          <td className="table-item__team">{user.team}</td>
          <td className="table-item__status">{user.status}</td>
          <th className="table-item__view-detail">
            <Link to="/management/users/user">
              <AiFillEye onClick={() => this.props.onViewUserInfo(user)} />
            </Link>
          </th>
        </tr>
      </Fragment>
    );
  }
}

export default LineUser;
