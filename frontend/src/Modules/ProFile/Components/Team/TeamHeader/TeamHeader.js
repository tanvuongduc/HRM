import React, { Component } from 'react';
import "./TeamHeader.scss"

class TeamHeader extends Component {
    render() {
        return (
            <div className="team-header">
                <div className="container">
                    <div className="team-header_name-team">
                        <h1 className="style-h1">Team Info</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamHeader;