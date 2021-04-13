import React, { Component, Fragment } from 'react';

class NotAuthorized extends Component {

    render() {
        return (
            <Fragment>
                <h1>Bạn không có quyền truy cập tính năng này</h1>
            </Fragment>
        );
    }
}

export default NotAuthorized;