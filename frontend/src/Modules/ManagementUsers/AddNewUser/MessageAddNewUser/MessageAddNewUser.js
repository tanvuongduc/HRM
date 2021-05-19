import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import './MessageAddNewUser.scss';

class MessageAddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <Fragment>
                <div className="message-add-user">
                    <h3 className="message-add-user__title">Success</h3>
                    <p className="message-add-user__message">Add new user success</p>
                    <div className="btn-form-control">
                        <a className="btn-control-save">OK</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MessageAddNewUser;