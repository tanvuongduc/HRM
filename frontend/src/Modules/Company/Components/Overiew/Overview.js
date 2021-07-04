import React, { Component } from 'react'
import Quickview from '../Quickview/Quickview';
import Contact from '../Contact/Contact';
import Note from '../Note/Note';
import Document from '../Document/Document';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';
import CompanyService from '../../Shared/CompanyService';

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyInfo: {
                notes: [],
                documents: []
            },
            editing: false,
        }
    };

    isSaveEditing = () => {
        this.setState({ editing: false })

        CompanyService.finishNoteResult(this.state.companyInfo.notes)
            .then(res => res)
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    isEditing = () => {
        this.setState({ editing: true })
    };

    /*--------------------------------------------------*/

    companyInfo = () => {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    companyInfo: res.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    /*--------------------------------------------------*/

    btnEditing = () => {
        if (this.state.editing) {
            return <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={() => this.isSaveEditing()}>Save</Button>
        } else {
            return <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => this.isEditing()}>Editing</Button>
        }
    };

    componentDidMount() {
        this.companyInfo();
    };

    render() {
        return (
            <div className="overview-content">
                <Quickview />
                <Contact handleEditing={this.state.editing} companyInfo={this.state.companyInfo} />
                <Document handleEditing={this.state.editing} documents={this.state.companyInfo.documents} />
                <Note handleEditing={this.state.editing} notes={this.state.companyInfo.notes} onChange={() => this.setState} />
                <div className="overview-btn-edit">
                    {this.btnEditing()}
                </div>
            </div>
        )
    }
}
