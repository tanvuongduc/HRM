import React from 'react';
import { Form, ModalNoti, REGEX_TEL } from '../../Shared';

class DepartmentEdit extends Form {
    constructor(props) {
        super(props);
        this.state = {
            notiMessage: '',
            form: this._getInitFormData({ temp: '10', pres: '10', hRate: '10' }),
        }
    }

    componentDidMount() {
        this._fillForm({ temp: '100', pres: '101', hRate: '102' })
    }

    render() {
        let { temp, pres, hRate } = this.state.form;
        return (
            <div>
                <div className='container-department'>
                <div className='main'>
                    <div className='header'>
                        <h2>Department</h2>
                    </div>
                    <div className='content'>
                        <div className='content-top-left'>
                            <h5>Total: 10 Department</h5>
                        </div>
                        <div className='content-top-right'>
                      
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
                                  
                                </div>
                                <div className='department-items-bottom-right'>
                                    <h5><span>&#171;</span> Chi tiet</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default DepartmentEdit;