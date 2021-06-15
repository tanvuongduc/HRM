import React from 'react'
import Quickview from '../Quickview/Quickview';
import Contact from '../Contact/Contact';
import Document from '../Document/Document';
import '../Overiew/_Overview.scss'
const Overview = () => {
    return (
        <div className="overview-content">
            <Quickview />
            <Contact />
            <Document />
        </div>
    )
}

export default Overview;
