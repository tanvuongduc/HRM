import React from 'react'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import DomainIcon from '@material-ui/icons/Domain';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Form } from '../../Shared/';
import { Card, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Contact extends Form {

    handleStyleEditing = () => {
        if (this.props.handleEditing) {
            return { display: 'block' };
        } else return { display: 'none' };
    };

    render() {
        const path = window.location.pathname;
        let { phone, domain, website, email, address } = this.props.companyInfo;
        return (
            <Card className="contact-content">
                <div className="header-contact">
                    <h3>Contact</h3>
                    <Link to={`${path}/configuration`}>
                        <IconButton color="primary" style={this.handleStyleEditing()}><SettingsIcon /></IconButton>
                    </Link>
                </div>
                <div className="contact-item">
                    <div>
                        <PhoneEnabledIcon />{' '}Phone : {phone}
                    </div>
                    <div>
                        <DomainIcon />{' '}Domain : <a href={domain}>{domain}</a>
                    </div>
                    <div>
                        <LanguageIcon />{' '}Website : <a href={website}>{website}</a>
                    </div>
                    <div>
                        <EmailIcon />{' '}Email : {email}
                    </div>
                    <div>
                        <LocationOnIcon />{' '}Address : {address}
                    </div>
                </div>
            </Card>
        )
    }
}
