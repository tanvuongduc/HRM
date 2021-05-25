import React, { useState, useEffect } from 'react'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Http } from '../../Shared/Index';

const Contact = () => {
    const [dataContact, setDataContact] = useState({});

    const getDataContact = async () => {
        try {
            const data = await Http.get('company')
            return setDataContact(data.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDataContact();
    }, []);

    let { phone, domain, email, address } = dataContact;

    return (
        <div className="contact-content">
            <h3>Contact</h3>
            <div className="contact-item">
                <div>
                    <PhoneEnabledIcon />{' '}Phone : {phone}
                </div>
                <div>
                    <LanguageIcon />{' '}Website : <a href={domain}>{domain}</a>
                </div>
                <div>
                    <EmailIcon />{' '}Email : {email}
                </div>
                <div>
                    <LocationOnIcon />{' '}Address : {address}
                </div>
            </div>
        </div>
    )
}

export default Contact;
