import React, { Component } from 'react';
import avt from '../../../Asset/Img/avatar.png';
import avt2 from '../../../Asset/Img/avatar2.png';

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
                    <div className='item-content-bottom'>
                        <p>MEMBER</p>
                        <div className='content-member'>
                            <div className='content-member-avt'>
                                <img src={avt} alt={avt} />
                                <img src={avt2} alt={avt2} />
                            </div>
                            <div className='content-member-nav'>
                                <button>&#8690;</button>
                                {/* &#8689; */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDepartment;
