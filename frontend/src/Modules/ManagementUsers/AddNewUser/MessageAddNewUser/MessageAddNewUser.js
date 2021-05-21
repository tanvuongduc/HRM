import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./MessageAddNewUser.scss";

class MessageAddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="message-add-user">
        <h3 className="title">Success</h3>
        <p className="message">Add new user success</p>
        <div className="btn-form-control">
          <a className="btn-control-save">OK</a>
        </div>
      </div>
    );
  }
}

export default MessageAddNewUser;
