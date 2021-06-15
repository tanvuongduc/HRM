import React from 'react'
import ModalAdd from './ModalAdd';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CompanyService from '../../Shared/CompanyService';
import { ModalConfirm, Form } from '../../Shared/';

export default class Note extends Form {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            notes: [],
            //
            index_update: null,
            notes_onchange: {},
            //
            index_delete: null,
            notiMessage: null,
        }
    };

    handleStyleEditing = () => {
        if (this.props.handleEditing) {
            return { display: 'block' };
        } else return { display: 'none' };
    };

    editingNote = (event, index) => {
        let { name, value } = event.target;
        this.setState({
            index_update: index,
            notes_onchange: { [name]: value }
        })

        // this.setState({ notes_update: this.state.notes_update })

        // console.log(this.state.notes_update, 'bbbbb')
        this.state.notes.splice(index, 1, { [name]: value })
        // this.setState({ notes: this.state.notes })

        // let idDocument = this.state.company.documents.map(id => id._id)
        // CompanyService.finishNoteResult(this.state.notes, idDocument, this.state.company)
        //     .then(res => res)
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     })
    };

    /*--------------------------------------------------*/

    getNotes = () => {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    company: res.data,
                    notes: res.data.notes
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    addNote = (item) => {
        this.state.notes.push(item)
        this.setState({ notes: this.state.notes })

        let idDocument = this.state.company.documents.map(id => id._id)
        CompanyService.finishNoteResult(this.state.notes, idDocument, this.state.company)
            .then(res => res)
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    /*--------------------------------------------------*/

    handleDelete = (event) => {
        this.setState({
            index_delete: event.target.value,
            notiMessage: 'Are you sure you want to delete this note ?'
        })
    };

    answer = (event) => {
        this.setState({ notiMessage: null })
        if (event) {
            this.state.notes.splice(this.state.index_delete, 1)
            this.setState({ notes: this.state.notes })

            let idDocument = this.state.company.documents.map(id => id._id)
            CompanyService.finishNoteResult(this.state.notes, idDocument, this.state.company)
                .then(res => res)
                .catch((error) => {
                    console.error('Error:', error);
                })
        } else null;
    };

    /*--------------------------------------------------*/

    componentDidMount() {
        this.getNotes();
    };

    render() {
        return (
            <div className="note-content">
                <div className="note-header">
                    <h3>Note</h3><ModalAdd add={(item) => this.addNote(item)} />
                </div>
                <div className="note-item">
                    {
                        this.state.notes.map((event, index) => (
                            <div key={index}>
                                <div className="note-item-title">
                                    <div className="item-content">
                                        <FormControl className="item-form" fullWidth>
                                            <TextField className="item-form-textfield" disabled={!this.props.handleEditing} label="Title" name="title" defaultValue={event.title} multiline variant="outlined" onChange={(event) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} />
                                        </FormControl><br /><br />
                                        <FormControl className="item-form" fullWidth>
                                            <TextField className="item-form-textfield" disabled={!this.props.handleEditing} label="Description" name="desc" defaultValue={event.desc} multiline variant="outlined" onChange={(event) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} />
                                        </FormControl>
                                    </div>
                                    <div className="item-menuIcon" style={this.handleStyleEditing()}>
                                        <IconButton color="secondary" value={index} onClick={(event) => this.handleDelete(event)} >
                                            <DeleteIcon />
                                        </IconButton>
                                        <ModalConfirm message={this.state.notiMessage} answer={(event) => this.answer(event)} />
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
