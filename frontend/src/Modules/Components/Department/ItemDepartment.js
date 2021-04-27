import React, { Component } from 'react';

class ItemDepartment extends Component {
    render() {
        return (
            <div className='department-item'>
                <div className='department-item-nav'>
                    <b>1 Department</b>
                </div>
                <div className='department-item-content'>
                    <div className='item-content-top'>
                        <b>Department</b>
                    </div>
                    <div className='item-content-bottom'></div>
                </div>
            </div>
        );
    }
}

export default ItemDepartment;
