import React, { Component } from 'react';
import NavUser from './NavUser/NavUser';
import NavListUser from './NavListUser/NavListUser';
import ListUser from './ListUser/ListUser';

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