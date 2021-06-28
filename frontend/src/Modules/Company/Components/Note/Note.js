import React from 'react'
import ModalAdd from './ModalAdd';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CompanyService from '../../Shared/CompanyService';
import { ModalConfirm, Form } from '../../Shared/';
import Card from '@material-ui/core/Card';

export default class Note extends Form {
    constructor(props) {
        super(props);
        this.state = {
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
        let notes = this.props.notes;

        notes[index][name] = value;
        this.props.onChange({ notes })
    };

    /*--------------------------------------------------*/

    addNote = (item) => {
        this.props.notes.push(item)

        CompanyService.finishNoteResult(this.props.notes)
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
            this.props.notes.splice(this.state.index_delete, 1)

            CompanyService.finishNoteResult(this.props.notes)
                .then(res => res)
                .catch((error) => {
                    console.error('Error:', error);
                })
        } else null;
    };

    render() {
        return (
            <Card className="note-content">
                <div className="note-header">
                    <h3>Note</h3><ModalAdd add={(item) => this.addNote(item)} />
                </div>
                <div className="note-item">
                    {
                        this.props.notes.map((event, index) => (
                            <div key={index}>
                                <div className="note-item-title">
                                    <div className="item-content">
                                        <FormControl className="item-form" fullWidth>
                                            <TextField className="item-form-textfield" disabled={!this.props.handleEditing} label="Title"
                                                name="title" defaultValue={event.title} multiline variant="outlined"
                                                onChange={(event) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} />
                                        </FormControl><br /><br />
                                        <FormControl className="item-form" fullWidth>
                                            <TextField className="item-form-textfield" disabled={!this.props.handleEditing} label="Description"
                                                name="desc" defaultValue={event.desc} multiline variant="outlined"
                                                onChange={(event) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} />
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
            </Card>
        )
    }
}
