import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <Link to='/'><button>Home</button></Link>
                <Link to='people'><button>People</button></Link>
                <Link to='/department'><button>Department</button></Link>
                <Link to='/company'><button>Company</button></Link>
                <Link to='/career'><button>Career</button></Link>
            </div>
        );
    }
}

export default Menu;