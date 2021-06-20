import { Button } from "@material-ui/core";
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
      <div className="message-box">
        <div className="message-add-user">
          <h3 className="title">Success</h3>
          <p className="message">Add new user success</p>
          <div className="btn-control-box">
            <Button className="btn-control-primary" color="primary">
              OK
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageAddNewUser;
