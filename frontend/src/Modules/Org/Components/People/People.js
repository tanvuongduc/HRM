import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class People extends Component {
    render() {
        return (
            <div className="card-people">
                <div className="list">
                    <h1 className="card-name"><b>People</b></h1>
                    <ul className="list-people">
                        <li className="list-people-item"><Link to="/all-team"><b>ALL</b></Link> </li>
                        <li className="list-people-item"><Link to="/my-team"><b>TEAM</b></Link> </li>
                        <li className="list-people-item"><Link to="/user"><b>USER</b></Link> </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default withRouter(People);