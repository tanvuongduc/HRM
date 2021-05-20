import React, { useState, useEffect } from 'react'
import { Http } from '../../Shared/Index';

const Contact = () => {
    const [dataContact, setDataContact] = useState({});

    const getDataContact = async () => {
        try {
            const data = await Http.get('company')
            data.data.map(event => {
                return setDataContact(event.contact)
            })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDataContact();
    }, []);

    return (
        <div className="contact-content">
            <h3>Contact</h3>
            <div className="contact-item">
                <div>
                    <i className="fa fa-phone" />{' '}Phone : {dataContact.phone}
                </div>
                <div>
                    <i className="fa fa-globe" />{' '}Website : <a href={dataContact.domain}>{dataContact.domain}</a>
                </div>
                <div>
                    <i className="fa fa-envelope" />{' '}Email : {dataContact.email}
                </div>
                <div>
                    <i className="fa fa-map-marker" />{' '}Address : {dataContact.address}
                </div>
            </div>
        </div>
    )
}

export default Contact;
