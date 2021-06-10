import React, { Component } from 'react'
import Quickview from '../Quickview/Quickview';
import Contact from '../Contact/Contact';
import Note from '../Note/Note';
import Document from '../Document/Document';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    };

    handleEditing = () => {
        this.setState({ editing: !this.state.editing })
    };

    btnEditing = () => {
        if (this.state.editing) {
            return <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={() => this.handleEditing()}>Save</Button>
        } else {
            return <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => this.handleEditing()}>Editing</Button>
        }
    };

    componentDidMount() {
        this.btnEditing();
    };

    render() {
        return (
            <div className="overview-content">
                <Quickview />
                <Contact />
                <Document handleEditing={this.state.editing} />
                <Note handleEditing={this.state.editing} />
                <div className="overview-btn-edit">
                    {this.btnEditing()}
                </div>
            </div>
        )
    }
}
