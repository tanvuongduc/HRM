import React from 'react'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import DomainIcon from '@material-ui/icons/Domain';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CompanyService from '../../Shared/CompanyService';
import { Form } from '../../Shared/';

export default class Contact extends Form {
    constructor(props) {
        super(props);
        this.state = {
            dataContact: {}
        }
    };

    getDataContact = () => {
        CompanyService.getCompanyByLocation()
            .then(res => this.setState({ dataContact: res.data }))
            .catch(error => {
                console.log(error)
            })
    };

    componentDidMount() {
        this.getDataContact();
    };

    render() {
        let { phone, domain, website, email, address } = this.state.dataContact;
        return (
            <div className="contact-content">
                <h3>Contact</h3>
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
            </div>
        )
    }
}
