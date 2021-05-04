import React, { Component } from 'react';

class NavbarEdit extends Component {
    render() {
        return (
            <div className="companyTab">
                <div className="companyTabSelect">Overview</div>
                <div className="companyTabSelect">Department</div>
                <div className="companyTabSelect">Career</div>
            </div>
        );
    }
}

export default NavbarEdit;