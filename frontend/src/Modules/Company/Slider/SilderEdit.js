import React, { Component } from 'react';

class SliderEdit extends Component {
    render() {
        return (
            <div className="c_header">
                <div className="textWelcome">
                    <h3>Welcome to Summoner's Rift</h3>
                    <div className="editButton">
                        <div className="editButtonItem">Edit</div>
                        <div className="editButtonItem">Add cover image</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderEdit;