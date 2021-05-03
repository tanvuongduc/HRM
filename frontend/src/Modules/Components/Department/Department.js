import React, { Component } from 'react';
import AddDepartment from './AddDepartment';
import ItemDepartment from './ItemDepartment';
import axios from 'axios';
import * as Config from '../../../Constances/const';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItem: ''
        }
    };
    Button1(e) {
        e.preventDefault();
        this.setState({
            showItem: 'department'
        });
    };
    Button2(e) {
        e.preventDefault();
        this.setState({
            showItem: 'adddepartment'
        });
    };
    showItem(event) {
        if (this.state.showItem === 'department' || this.state.showItem === '') {
            return <ItemDepartment data={event} />;
        }
        else if (this.state.showItem === 'adddepartment')
            return <AddDepartment />
    };
    componentDidMount() {
        axios.get(`${Config.BASE_URL}department`, null).then(res => {
            res.data.forEach(e => {
                return this.showItem(e);
            });
        }).catch(err => {
            console.log(err);
        });
    };
    render() {
        return (
            <div className='department-container'>
                <div className='department-content'>
                    <div className='content-header'>
                        <b>Department</b><hr />
                    </div>
                    <div className='content-button'>
                        <button onClick={(e) => this.Button1(e)}>My Department</button>
                        <button onClick={(e) => this.Button2(e)}>
                            <svg className="o-icon u-margin--r-5 o-icon--xs" viewBox="0 0 50 50">
                                <path d="M25 7.2c-9.8 0-17.8 8-17.8 17.8s8 17.8 17.8 17.8 17.8-8 17.8-17.8S34.8 7.2 25 7.2zm8.8 19h-7.6v7.6c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2v-7.6h-7.6c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h7.6v-7.6c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v7.6h7.6c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2z"></path>
                            </svg>&ensp;Add Department
                        </button>
                    </div>
                </div>
                {this.showItem()}
            </div>
        );
    }
}

export default Department;
