import React from 'react'
import Quickview from '../Quickview/Quickview';
import Contact from '../Contact/Contact';
import Note from '../Note/Note';
import Document from '../Document/Document';

const Overview = () => {
    return (
        <div className="overview-content">
            <Quickview />
            <Contact />
            <Note />
            <Document />
        </div>
    )
}

export default Overview;
