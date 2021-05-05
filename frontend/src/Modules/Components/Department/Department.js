import React, { Component } from 'react';
import AddDepartment from './AddDepartment';
import ItemDepartment from './ItemDepartment';
import { Http } from '../../../Helper/Http';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItem: '',
            data: []
        }
    };

    showItem() {
        if (this.state.showItem === 'department' || this.state.showItem === '') {
            return <ItemDepartment data={this.state.data} />;
        }

    };
    componentDidMount() {
        Http.get("department").then(e => {
            return this.setState({
                data: e.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    render() {
        return (

            <div className='department-container'>
                <h1>Department</h1>
                {this.showItem()}
            </div>
        );
    }
}

export default Department;
