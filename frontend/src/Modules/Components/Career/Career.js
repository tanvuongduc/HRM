import React, { Component } from 'react';
import ItemCareer from './ItemCareer';

class Career extends Component {
    render() {
        return (
            <div className='career-container'>
                <div className='career-content'>
                    <div className='content-header'>
                        <b>Career</b><hr />
                    </div>
                    <div className='content-button'>
                        <button>My Career</button>
                        <button>
                            <svg className="o-icon o-icon o-icon--sm" viewBox="0 0 50 50">
                                <path d="M35 36H15c-.7 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2h20c.7 0 1.2-.6 1.2-1.2S35.7 36 35 36zM15 34.1h4.3c.3 0 .6-.1.9-.4L35.9 18c.5-.5.5-1.3 0-1.8L31.6 12c-.5-.5-1.3-.5-1.8 0L14.1 27.7c-.2.2-.4.6-.4.9v4.3c0 .7.6 1.2 1.3 1.2zm2.1-7.6l4.3 4.3-1.8 1.8-4.3-4.3 1.8-1.8z"></path>
                            </svg>&ensp;Edit Career
                        </button>
                    </div>
                </div>
                <ItemCareer />
            </div>
        );
    }
}

export default Career;
