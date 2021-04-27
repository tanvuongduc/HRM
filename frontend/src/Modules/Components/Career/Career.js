import React, { Component } from 'react';

class Career extends Component {
    render() {
        return (
            <div className='career-container'>
                <div className='career-content'>
                    <div className='content-header'>
                        <b>Career</b><hr />
                    </div>
                    <div className='content-button'>
                        <button>Career</button>
                        <button>Add Career</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Career;
