import React, { Component } from 'react';

class Company extends Component {
    render() {
        return (
            <div className='company-container'>
                <div className='company-content'>
                    <div className='content-header'>
                        <b>Company</b><hr />
                    </div>
                    <div className='content-button'>
                        <button>Company</button>
                        <button>Add Company</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;
