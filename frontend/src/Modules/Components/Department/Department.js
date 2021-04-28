import React, { Component } from 'react';
import ItemDepartment from './ItemDepartment';

class Department extends Component {
    render() {
        return (
            <div className='department-container'>
                <div className='department-content'>
                    <div className='content-header'>
                        <b>Department</b><hr />
                    </div>
                    <div className='content-button'>
                        <button>My Department</button>
                        <button>
                            <svg className="o-icon u-margin--r-5 o-icon--xs" viewBox="0 0 50 50">
                                <path d="M25 7.2c-9.8 0-17.8 8-17.8 17.8s8 17.8 17.8 17.8 17.8-8 17.8-17.8S34.8 7.2 25 7.2zm8.8 19h-7.6v7.6c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2v-7.6h-7.6c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h7.6v-7.6c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v7.6h7.6c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2z"></path>
                            </svg>&ensp;Add Department
                        </button>
                    </div>
                </div>
                <ItemDepartment />
            </div>
        );
    }
}

export default Department;
