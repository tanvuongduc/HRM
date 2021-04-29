import React, { Component } from 'react';
import presentation from '../../../Asset/Img/presentation.svg';

class AddDepartment extends Component {
    render() {
        return (
            <div className='department-item'>
                <div className='department-item-nav'>
                    <b>Create a new department</b>
                    <p>
                        Department allow you to group people by location.
                        Departments can register different holidays, helping you to define the time off for everyone.
                    </p>
                </div>
                <div className='adddepartment-item-content'>
                    <div className='content-regisger'>
                        <form>
                            <label><b>Name Department</b></label>
                            <input type="text" placeholder="Name Department" name="name" required />
                            <label><b>Leader ID</b></label>
                            <input type="text" placeholder="Leader ID" name="leader" required />
                            <label><b>Describe</b></label>
                            <textarea placeholder="Describe" name="describe"></textarea>
                            <hr />
                            <button type="submit" className="registerbtn">Create Department</button>
                        </form>
                    </div>
                    <div className='content-img'>
                        <img src={presentation} alt={presentation} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDepartment;
