import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./HeaderUser.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";
import { Http } from "../../../../Helper/Http";
import { BASE_URL } from "../../../../Constances/const";

class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      isDisplayChangeAvatar: false
    };
  }

  onDisplayChangeAvatar = () => {
    this.setState({
      isDisplayChangeAvatar: true,
    });
  };

  onSaveChangeAvatar = (image) => {
    this.props.uploadAvatar(image, "jpg");
    this.onCloseChangeAvatar();
  };

  onCloseChangeAvatar = () => {
    this.setState({
      isDisplayChangeAvatar: false,
    });
  };

  render() {
    const { avatar, isDisplayChangeAvatar } = this.state;
    const { userName, emailUser } = this.props;

    const elmChangeAvatar = isDisplayChangeAvatar ? (
      <ChangeAvatar
        onSaveChangeAvatar={this.onSaveChangeAvatar}
        onCloseChangeAvatar={this.onCloseChangeAvatar}
      />
    ) : (
      ""
    );
    const avatarDefault =
      avatar === null ? <FaUser className="avatar-user-default" /> : "";
    return (
      <div className="profile-header-overview">
        <div className="container">
          <div
            className="overview-avatar-user"
            style={avatar === null ? { backgroundColor: "white" } : null}
          >
            <img
              src={BASE_URL + avatar}
              className="user-avatar"
            />
            {avatarDefault}
            <div className="add-avatar-user">
              <BiImageAdd
                className="icon-change-avatar"
                onClick={this.onDisplayChangeAvatar}
              />
            </div>
          </div>
          <div className="overview-info">
            <h3 className="username">{userName}</h3>
            <p className="email">
              <FaEnvelope className="email-icon" />
              {emailUser}
            </p>
          </div>
        </div>
        {elmChangeAvatar}
      </div>
    );
  }
}

export default HeaderUser;
