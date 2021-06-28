import React from 'react'
import { Form, ModalConfirm } from '../../Shared';
import { IconButton } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import CompanyService from '../../Shared/CompanyService';
import { AuthService } from '../../Shared/';
import Upload from '../../../../Shared/Components/Upload/Upload';
import Card from '@material-ui/core/Card';

export default class Document extends Form {
    constructor(props) {
        super(props);
        this.state = {
            id_document: null,
            id_delete: null,
            notiMessage: null
        }
    };

    handleStyleEditing = () => {
        if (this.props.handleEditing) {
            return { display: 'block' };
        } else return { display: 'none' };
    };

    /*----------------------------------------------*/

    getDocument = () => {
        let id_document = this.props.documents.map(id => ({ id: id._id }))
        this.setState({
            id_document: id_document
        })
    };

    /*----------------------------------------------*/

    winOpen = (event) => {
        AuthService._winOpen(event.target.value)
    };

    updateUpload = (idUpload, DocumentUpload) => {
        this.props.documents.push(DocumentUpload)
        this.state.id_document.push({ id: idUpload })
        this.setState({ documents: this.props.documents })

        let _idUpdate = this.state.id_document.map(id => id.id)
        CompanyService.finishDocumentResult(_idUpdate)
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    /*----------------------------------------------*/

    handleDelete = (event) => {
        this.setState({
            id_delete: event.target.value,
            notiMessage: 'Are you sure you want to delete this note ?'
        })
    };

    answer = (event) => {
        this.setState({ notiMessage: null })
        if (event) {
            let newDocument = this.props.documents.filter(id => id._id !== this.state.id_delete)
            this.setState({ documents: newDocument })

            let _idDelete = newDocument.map(id => id._id)
            CompanyService.finishDocumentResult(_idDelete)
                .catch((error) => {
                    console.error('Error:', error);
                })
        } else null;
    };

    /*----------------------------------------------*/

    niceBytes = (x) => {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    };

    formatDate = (d) => {
        let newDate = new Date(d.toLocaleString())
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date < 10 ? `0${date}` : `${date}`}-${month < 10 ? `0${month}` : `${month}`}-${year}`
    };

    componentDidMount() {
        this.getDocument();
    };

    render() {
        return (
            <Card className="document-content">
                <div className="document-header">
                    <h3>Documents</h3><Upload Upload={(idUpload, DocumentUpload) => this.updateUpload(idUpload, DocumentUpload)} />
                </div>
                <div className="document-item">
                    {
                        this.props.documents.map((event, index) => (
                            <div key={index}>
                                <div className="document-item-title">
                                    <div className="item-content">
                                        <p><b>File name: </b>{event.fileName}{'.'}{event.extension}</p>
                                        <p><b>Created: </b>{this.formatDate(event.createdAt)}</p>
                                        <p><b>Size: </b>{this.niceBytes(event.size)}</p>
                                    </div>
                                    <div className="item-menuIcon">
                                        <IconButton color="primary" value={event.url} onClick={(event) => this.winOpen(event)}>
                                            <SaveAltIcon />
                                        </IconButton>
                                        <IconButton color="secondary" value={event._id} onClick={this.handleDelete} style={this.handleStyleEditing()}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div><hr />
                            </div>
                        ))
                    }
                </div>
                <ModalConfirm message={this.state.notiMessage} answer={(event) => this.answer(event)} />
            </Card>
        )
    }
}
