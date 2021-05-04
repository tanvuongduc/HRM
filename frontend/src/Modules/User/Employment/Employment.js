import React, { Component, Fragment } from "react";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import './Employment.scss';
import ChangeManager from './ChangeManager/ChangeManager';

import LineManager from "./LineManager/LineManager";
import Teams from "./Teams/Teams";

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
              <Teams/>
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
