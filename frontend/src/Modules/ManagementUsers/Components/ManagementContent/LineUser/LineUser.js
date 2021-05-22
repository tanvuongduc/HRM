import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./LineUser.scss";

class LineUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    const pathUser = "/management/users/" + user.id;
    return (
      <tr className="content-table-item" key={user.id}>
        <td className="item-selected">
          <input type="checkbox" />
        </td>
        <td className="item-id">{user.id}</td>
        <td className="item-username">{user.name}</td>
        <td className="item-email">{user.email}</td>
        <td className="item-team">{user.team}</td>
        <td className="item-status">{user.status}</td>
        <th className="item-view-detail">
          <Link to={pathUser}>
            <AiFillEye
              className="view-detail-icon"
            />
          </Link>
        </th>
        <th className="item-edit-info">
          <Link to="/management/users/edit">
            <RiEdit2Fill
              className="edit-info-icon"
              
            />
          </Link>
        </th>
      </tr>
    );
  }
}

export default LineUser;
