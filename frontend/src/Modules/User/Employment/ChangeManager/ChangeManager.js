import React, { Component, Fragment } from "react";
import "./ChangeManager.scss";
import {} from "react-icons/fa";

class ChangeManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
       selectManager: 0
    };
  }
  
  onChangeValue = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    value = parseInt(value);
    if(name === "selectManager") {
       if(value === 1) {
         value = 1;
       } else if(value === 2) {
         value = 2;
       } else if(value === 3) {
         value = 3;
       }
    }
    this.setState({
       [name]: value
    });
    console.log(this.state)

  }

  onSaveChangeManager = () => {
    this.props.onSaveChangeManager(this.state.selectManager);
    this.props.closeChangeManger();
  } 
  render() {
    return (
      <Fragment>
        <div className="change-manager-box">
          <h5 className="change-manager-box__title">Change your manager</h5>
          <div className="form-group">
            <label className="form-group__label">Line manager</label>
            <br></br>
            <select 
                className="form-control select-manager"
                name="selectManager"
                value={this.state.selectManager}
                onChange={this.onChangeValue}
            >
              <option>Choose Manager</option>
              <option value={1}>Manager 1</option>
              <option value={2}>Manager 2</option>
              <option value={3}>Manager 3</option>
            </select>
          </div>
          <div className="btn-change-manager">
            <a className="btn-control-close" onClick={this.props.closeChangeManger}>Close</a>
            <a className="btn-control-save" onClick={this.onSaveChangeManager}>Save</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ChangeManager;
