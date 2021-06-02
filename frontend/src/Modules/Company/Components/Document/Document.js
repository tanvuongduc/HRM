import React from 'react'
import { Form } from '../../Shared';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CompanyService from '../../Shared/CompanyService';
import Upload from '../../../../Shared/Components/Upload/Upload';

export default class Document extends Form {
    constructor(props) {
        super(props);
        this.state = {
            document: []
        }
    };

    getDocument() {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    document: res.data.documents
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    componentDidMount() {
        this.getDocument();
    };

    niceBytes(x) {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    };

    render() {
        return (
            <div className="document-content">
                <div className="document-header">
                    <h3>Document</h3><Upload />
                </div>
                <div className="document-item">
                    {
                        this.state.document.map((event, index) => (
                            <div key={index}>
                                <div className="document-item-title">
                                    <div className="item-content"><b>{event.fileName}</b></div>
                                    <div className="item-menuIcon">
                                        <IconButton><MoreVertIcon /></IconButton>
                                    </div>
                                    <div className="item-content">
                                        <p><b>CreatedAt: </b>{event.createdAt}</p>
                                    </div>
                                    <div className="item-content">
                                        <p><b>Size: </b>{this.niceBytes(event.size)}{' '}{event.extension}</p>
                                    </div>
                                </div><hr />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
