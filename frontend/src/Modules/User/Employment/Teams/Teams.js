import React, { Component, Fragment } from "react";
import "./Teams.scss";
import { BsPlusCircle } from "react-icons/bs";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="employment-team">
        <h3>Teams</h3>
        <div className="add-to-team">
          <h4 className="title">Thêm vào team</h4>
          <br></br>
          <div className="input-group mb-3">
            <select className="form-select">
              <option className="select-team-title">Chọn team</option>
              <option>Team 1</option>
              <option>Team 2</option>
              <option>Team 3</option>
            </select>
            <span className="input-group-text new-team" id="basic-addon1">
              <BsPlusCircle className="new-team-icon" /> New team
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.props.isDisplayAddMembers}
          >
            Thêm vào team
          </button>
        </div>
      </div>
    );
  }
}

export default Teams;
