import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppSidebar extends Component {
    render() {
        return (
            <div className='AppSidebar'>
                <Link to='/app/department'><button>Department</button></Link>
                <Link to='/app/company'><button>Company</button></Link>
                <Link to='/app/career'><button>Career</button></Link>
            </div>
        );
    }
}

export default AppSidebar;
