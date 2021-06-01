import React from 'react'
import { Form, Http } from '../../Shared';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ModalAdd from './ModalAdd';
import CompanyService from '../../Shared/CompanyService';
import Upload from '../../../../Shared/Components/Upload/Upload';

export default class Document extends Form {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            document: []
        }
    };

    getDocument() {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    document: res.data.documents
                })
                this.setState({
                    company: res.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    addDocument = async (item) => {
        this.state.document.push(item)
        this.setState({
            document: this.state.document
        });
        const res = await Http.upload(item.file[0], item.title, item.desc);
        console.log(res);
    };

    componentDidMount() {
        this.getDocument();
    };

    render() {
        return (
            <div className="document-content">
                <div className="document-header">
                    <h3>Document</h3><ModalAdd add={(item) => this.addDocument(item)} />
                </div>
                <div className="document-item">
                    {
                        this.state.document.map((event, index) => (
                            <div key={index}>
                                <div className="document-item-title">
                                    <div className="item-content"><b>{event.title}</b></div>
                                    <div className="item-menuIcon">
                                        <IconButton><MoreVertIcon /></IconButton>
                                    </div>
                                    <div className="item-content">
                                        <p><b>Description: </b>{event.desc}</p>
                                    </div>
                                    <div className="item-content">
                                        <p><b>FileName: </b>{event.fileName}</p>
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
