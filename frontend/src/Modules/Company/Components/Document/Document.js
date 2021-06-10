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
        CompanyService.getCompanyByLocation()
            .then(res => {
                let id_document = res.data.documents.map(id => ({ id: id._id }))
                this.setState({
                    company: res.data,
                    document: res.data.documents,
                    id_document: id_document
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    /*----------------------------------------------*/

    winOpen = (event) => {
        AuthService._winOpen(event.target.value)
    };

    updateUpload = (idUpload, DocumentUpload) => {
        this.state.document.push(DocumentUpload)
        this.state.id_document.push({ id: idUpload })
        this.setState({ document: this.state.document })

        let _idUpdate = this.state.id_document.map(id => id.id)
        CompanyService.finishDocumentResult(_idUpdate, this.state.company)
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
            let newDocument = this.state.document.filter((item) => item._id !== this.state.id_delete)
            this.setState({ document: newDocument })

            let _idDelete = this.state.document.map(id => id._id)
            CompanyService.finishDocumentResult(_idDelete, this.state.company)
                .catch((error) => {
                    console.error('Error:', error);
                })
        } else null;
    };

    /*----------------------------------------------*/

    componentDidMount() {
        this.getDocument();
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
        return `${year}/${month < 10 ? `0${month}` : `${month}`}/${date < 10 ? `0${date}` : `${date}`}`
    };

    render() {
        return (
            <div className="document-content">
                <div className="document-header">
                    <h3>Document</h3><Upload Upload={(idUpload, DocumentUpload) => this.updateUpload(idUpload, DocumentUpload)} />
                </div>
                <div className="document-item">
                    {
                        this.state.document.map((event, index) => (
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
            </div>
        )
    }
}
