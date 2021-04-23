import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import avtmale from '../../../Assets/uploads/avt-user/male.png';
import avtfemale from '../../../Assets/uploads/avt-user/female.png';

class Department extends Component {
    render() {
        return (
            <div className='container-department'>
                <Menu />
                <div className='main'>
                    <div className='header'>
                        <h2>Department</h2>
                    </div>
                    <div className='content'>
                        <div className='content-top-left'>
                            <h5>Total: 10 Department</h5>
                        </div>
                        <div className='content-top-right'>
                            <Link to='/adddepartment'>
                                <button><i className="fa fa-plus"></i> Add Department</button>
                            </Link>
                        </div>
                        <div className='department-items'>
                            <div className='department-items-top'>
                                <div className='department-items-top-left'>
                                    <h5>Name: Department</h5>
                                    <p>Leader: MR. ABC</p>
                                </div>
                                <div className='department-items-top-right'>
                                    <button><i className="fa fa-edit"></i> Edit</button>
                                </div>
                            </div>
                            <div className='department-items-bottom'>
                                <div className='department-items-bottom-header'>
                                    <h5>Member</h5>
                                </div>
                                <div className='department-items-bottom-left'>
                                    <img src={avtmale} alt={avtmale} />
                                    <img src={avtfemale} alt={avtfemale} />
                                    <img src={avtmale} alt={avtmale} />
                                    <img src={avtfemale} alt={avtfemale} />
                                </div>
                                <div className='department-items-bottom-right'>
                                    <h5><span>&#171;</span> Chi tiet</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Department;