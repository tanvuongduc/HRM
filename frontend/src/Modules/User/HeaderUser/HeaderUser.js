import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./HeaderUser.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";

class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
      const { userName, emailUser } =  this.props;
    return (
      <Fragment>
        <div className="profile-header__overview">
          <div className="container">
            <div className="overview__avatarUser">
              <FaUser className="avatarUser__iconAvatar" />
            </div>
            <div className="overview__info">
              <h3 className="info__username">{userName}</h3>
              <p className="info__email">
                <FaEnvelope className="email__icon" />
                {emailUser}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderUser;
