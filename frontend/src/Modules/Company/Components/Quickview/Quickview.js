import React, { Component } from 'react'

export default class Quickview extends Component {
    render() {
        return (
            <div className="quickview-content">
                <h3>Overview</h3>
                <div className="quickview-item">
                    <div>
                        <b>10</b><p>Departments</p>
                    </div>
                    <div>
                        <b>2</b><p>Teams</p>
                    </div>
                    <div>
                        <b>12</b><p>Peoples</p>
                    </div>
                </div>
            </div>
        )
    }
}
