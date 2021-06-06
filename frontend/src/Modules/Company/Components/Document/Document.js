import React from 'react'
import { Form, ModalConfirm } from '../../Shared';
import { IconButton } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import CompanyService from '../../Shared/CompanyService';
import { AuthService } from '../../Shared/';
import Upload from '../../../../Shared/Components/Upload/Upload';

export default class Document extends Form {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            document: [],
            notiMessage: "",
            id_delete: ""
        }
    };

    getDocument = () => {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    document: res.data.documents,
                    company: res.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    winOpen = (event) => {
        AuthService._winOpen(event.target.value)
    };

    handleDelete = (event) => {
        this.setState({
            id_delete: event.target.value,
            notiMessage: 'Are you sure you want to delete this note ?'
        })
    };

    answer = (event) => {
        this.setState({ notiMessage: '' })
        if (event) {
            const newDocument = this.state.document.filter((item) => item._id !== this.state.id_delete)
            this.setState({ document: newDocument })
            
            this.state.document.map(event => {
                CompanyService.finishDocumentResult(event._id, this.state.company)
                    .catch((error) => {
                        console.error('Error:', error);
                    })
            })
        } else null
    };

    componentDidMount() {
        this.getDocument();
    };

    niceBytes = (x) => {
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
                                    <div className="item-content">
                                        <p><b>File name: </b>{event.fileName}{'.'}{event.extension}</p>
                                        <p><b>Created: </b>{event.createdAt}</p>
                                        <p><b>Size: </b>{this.niceBytes(event.size)}</p>
                                    </div>
                                    <div className="item-menuIcon">
                                        <IconButton color="primary" value={event.url} onClick={(event) => this.winOpen(event)} >
                                            <SaveAltIcon />
                                        </IconButton>
                                        <IconButton color="secondary" value={event._id} onClick={this.handleDelete}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div><hr />
                            </div>
                        ))
                    }
                </div>
                <ModalConfirm message={this.state.notiMessage} answer={(event) => this.answer(event)} />
            </div>
        )
    }
}
