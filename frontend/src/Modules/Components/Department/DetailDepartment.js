import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'team1'
        }
    }
    
    render() {
        return (
            <div style={{padding: '100px'}}>
                <h3>TEN PHONG BAN</h3>
                <ul>
                    <Link to={"detail" + "/" + this.state.name}><button>Chi tiết</button></Link>
                </ul>
            </div>
        );
    }
}

export default DetailDepartment;
