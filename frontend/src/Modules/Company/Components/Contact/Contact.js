import React from 'react'
import Div from './CssContact'

const Contact = ({ data }) => {
    const showData = data.map((e, i) => {
        return (
            <div key={i}>
                <div>
                    <i className="fa fa-phone" />{' '}Phone : {e.phone}
                </div>
                <div>
                    <i className="fa fa-globe" />{' '}Website : <a href={e.domain}>{e.domain}</a>
                </div>
                <div>
                    <i className="fa fa-envelope" />{' '}Email : {e.email}
                </div>
                <div>
                    <i className="fa fa-map-marker" />{' '}Address : {e.address}
                </div>
            </div>
        )
    });
    return (
        <Div>
            <h3>Contact</h3>
            {showData}
        </Div>
    )
}
export default Contact;
