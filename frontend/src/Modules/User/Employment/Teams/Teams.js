import React, { Component, Fragment } from 'react';
import './Teams.scss';
import {BsPlusCircle} from "react-icons/bs";

class Teams extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return(
            <Fragment>
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
            </Fragment>
        );
    }
}

export default Teams;