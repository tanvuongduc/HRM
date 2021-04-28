import React, { Component, Fragment } from "react";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import {BsPlusCircle} from "react-icons/bs";
import './Employment.scss';
import ChangeManager from './ChangeManager/ChangeManager';

import LineManager from "./LineManager/LineManager";

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isDisplayChangeManager: false,
       manager: ''
    }
  }
  
  onChangeManager = () => {
    this.setState({
      isDisplayChangeManager: true,
    });
  };

  closeChangeManager = () => {
    this.setState({
      isDisplayChangeManager: false,
    });
  };
  
  onSaveChangeManager = (data) => {
    var { manager } = this.state;
    manager = data;
     this.setState({
       manager: manager
     });
  }
  render() {
     var { isDisplayChangeManager } = this.state;
    var elmChangeManager = isDisplayChangeManager ? (
      <ChangeManager closeChangeManger={this.closeChangeManager} onSaveChangeManager={this.onSaveChangeManager} />
    ) : (
      ""
    );
    return (
      <Fragment>
        <div className="profile-main__employment">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="employment__team">
                <h3>Teams</h3>
                <div className="team__add-to-team">
                  <h4 className="add-to-team__title">Thêm vào team</h4>
                  <br></br>
                  <div className="input-group mb-3">
                    <select className="form-select">
                        <option selected className="select-team-title">Chọn team</option>
                        <option>Team 1</option>
                        <option>Team 2</option>
                        <option>Team 3</option>
                    </select>
                     <span className="input-group-text new-team" id="basic-addon1">
                      <BsPlusCircle className="new-team-icon"/> New team
                    </span>
                  </div>
                  <button className="btn btn-primary">Thêm vào team</button>
                </div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <LineManager onChangeManager={this.onChangeManager} manager={this.state.manager}/>
            </div>
          </div>
        </div>
        {elmChangeManager}
      </Fragment>
    );
  }
}
export default Employment;
