import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./HeaderUser.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";
import { Http } from "../../../Helper/Http";

class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      image: null,
      isDisplayChangeAvatar: false,
    };
  }
  
  async componentDidMount() {
    let data = await this.getInfo();
    console.log(this.state.image);
  }

  async getInfo() {
    const res = await Http.get("users/user", {
      id: "6088cc2b80660b2f2818ae8a",
    });
    await this.setState({
      userName: res.data.name,
      email: res.data.email
    });
    console.log(this.state);
    return res.data;
  }


  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    this.setState ({
      userName: nextProps.userName,
      email: nextProps.emailUser
    });
  }

  onDisplayChangeAvatar = () => {
    this.setState({
      isDisplayChangeAvatar: true,
    });
  };

  onSaveChangeAvatar = (image) => {
    console.log(image);
    this.setState({
      image: image,
    });
    this.props.uploadAvatar(image,"jpg");
    this.onCloseChangeAvatar();
  };

  onCloseChangeAvatar = () => {
    this.setState({
      isDisplayChangeAvatar: false,
    });
  };

  render() {
    const { userName, email, image, isDisplayChangeAvatar } = this.state;
    const {avatar } = this.props;
    const elmChangeAvatar = isDisplayChangeAvatar ? (
      <ChangeAvatar
        onSaveChangeAvatar={this.onSaveChangeAvatar}
        onCloseChangeAvatar={this.onCloseChangeAvatar}
      />
    ) : (
      ""
    );
    const avatarDefault = avatar === null ? <FaUser className="avatarUser__iconAvatar" /> : ''; 
    return (
      <Fragment>
        <div className="profile-header__overview">
          <div className="container">
            <div className="overview__avatarUser" style={avatar === null ? {backgroundColor: 'white'} : null}>
              <img
                src={"http://localhost:3000"+avatar}
                className="avatarUser__img"

              />
              {avatarDefault}
              <div className="avatarUser__background-iconChange">
                <BiImageAdd
                className="avatarUser__iconChange"
                onClick={this.onDisplayChangeAvatar}
              />
              </div>
              
            </div>
            <div className="overview__info">
              <h3 className="info__username">{userName}</h3>
              <p className="info__email">
                <FaEnvelope className="email__icon" />
                {email}
              </p>
            </div>
          </div>
          {elmChangeAvatar}
        </div>
      </Fragment>
    );
  }
}

export default HeaderUser;
