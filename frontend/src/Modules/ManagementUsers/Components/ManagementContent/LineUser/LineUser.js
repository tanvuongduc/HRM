import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./LineUser.scss";
import { TableCell, TableRow } from "@material-ui/core";

class LineUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, path } = this.props;
  
    // const pathUser = "/management/users/" + user.id;
    const userBirthday = new Date(user.birthday);
    const userBirthdayDate = userBirthday.getDate();
    const userBirthdayMonth = userBirthday.getMonth();
    const userBirthdayYear = userBirthday.getFullYear();
    const userBirthdayConvert =
      (userBirthdayDate < 10 ? "0" + userBirthdayDate : userBirthdayDate) +'/'+
      (userBirthdayMonth < 10 ? "0" + userBirthdayMonth : userBirthdayMonth) +'/'+
      userBirthdayYear;
    console.log("Date", userBirthdayDate);
    return (
      <TableRow hover className="content-table-item" key={user.id}>
        <TableCell className="item-id">{user.id}</TableCell>
        <TableCell className="item-username">{user.name}</TableCell>
        <TableCell className="item-birthday">{userBirthdayConvert}</TableCell>
        <TableCell className="item-phone-number">{user.phone}</TableCell>
        <TableCell className="item-email">{user.email}</TableCell>
        <TableCell className="item-team">{user.team}</TableCell>
        <TableCell className="item-status">{user.status}</TableCell>
        <TableCell className="item-view-detail">
          <Link to={`${path}/${user.id}`}>
            <AiFillEye className="view-detail-icon" />
          </Link>
        </TableCell>
      </TableRow>
    );
  }
}

export default LineUser;
