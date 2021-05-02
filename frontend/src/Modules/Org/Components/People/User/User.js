import React, { Component } from 'react';
import ListUser from './ListUser/ListUser';
import NavListUser from './NavListUser/NavListUser';
import NavUser from './NavUser/NavUser';

class User extends Component {
    render() {
        return (
            <div className="user">
                <NavUser/>
                <div className="list-user">
                    <NavListUser/>
                    <ListUser/>
                </div>
            </div>
        );
    }
}

export default User;