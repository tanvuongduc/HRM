import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Team from './Team/Team';

class MyTeam extends Component {
    render() {
        return (
            <div className="list-team">
                <div className="add-team">
                    <h3 className="list-my-team"><b>List team</b></h3>
                    <button className="btn-addNewTeam"><b>Tạo team mới</b></button>
                </div>
                <Team/>
            </div>
        );
    }
}

export default withRouter(MyTeam);