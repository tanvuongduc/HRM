import React, { Component, Fragment } from 'react';
import './EditInfo.scss';

class EditInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Fragment>
                <div className="edit-details-info">
                    <label>Edit</label>
                    <div className="form-group">
                       <input type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Save</button>
                </div>
            </Fragment>
        );
    }
}

export default EditInfo;