import React, { Component, Fragment } from "react";
import "./LineManager.scss";
import { FaUserAlt } from "react-icons/fa";

class LineManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { manager } = this.props;
    if (manager === 1) {
      manager = "Manager 1";
    } else if (manager === 2) {
      manager = "Manager 2";
    } else if (manager === 3) {
      manager = "Manager 3";
    } else {
      manager = "";
    }
    return (
      <div className="employment-manager">
        <h3>Line Manager</h3>
        <div className="your-manager">
          <h4 className="title">Your Manager</h4>
          <div className="manager-bar">
            <FaUserAlt className="icon-manager" />
            <span className="name-manager">{manager}</span>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.props.onChangeManager}
          >
            Thay đổi người quản lý
          </button>
        </div>
      </div>
    );
  }
}

export default LineManager;
