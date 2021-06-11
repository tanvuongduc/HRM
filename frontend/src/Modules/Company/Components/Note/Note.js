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
            note: [],
            
            title_update: '',
            desc_update: '',
            index_update: '',

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
            title_update: name,
            desc_update: value,
            index_update: index
        })

        console.log(index)

        // let { note, title_update, desc_update, index_update } = this.state;

        // console.log(title_update, desc_update, index_update, 'ttt')
        // if (!this.props.handleEditing) {
        //     let newNote = note.splice(index_update, 1, { [title_update]: desc_update });
        //     this.setState({ note: newNote })
        //     console.log(newNote, 'ttt')
        // } else null;
    };

    /*--------------------------------------------------*/

    getNote = () => {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    company: res.data,
                    note: res.data.notes
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    addNote = (item) => {
        this.state.note.push(item)
        this.setState({ note: this.state.note })

        let idDocument = this.state.company.documents.map(id => id._id)
        CompanyService.finishNoteResult(this.state.note, idDocument, this.state.company)
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
            this.state.note.splice(this.state.index_delete, 1)
            this.setState({ note: this.state.note })

            let idDocument = this.state.company.documents.map(id => id._id)
            CompanyService.finishNoteResult(this.state.note, idDocument, this.state.company)
                .catch((error) => {
                    console.error('Error:', error);
                })
        } else null;
    };

    /*--------------------------------------------------*/

    componentDidMount() {
        this.getNote();
    };

    render() {
        return (
            <div className="note-content">
                <div className="note-header">
                    <h3>Note</h3><ModalAdd add={(item) => this.addNote(item)} />
                </div>
                <div className="note-item">
                    {
                        this.state.note.map((event, index) => (
                            <div key={index}>
                                <div className="note-item-title">
                                    <div className="item-content">
                                        <FormControl className="item-form" fullWidth>
                                            {
                                                (this.props.handleEditing) ?
                                                    <TextField className="item-form-textfield" label="Title" name="title" defaultValue={event.title} multiline variant="outlined" onChange={(event, index) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} /> :
                                                    <TextField className="item-form-textfield" disabled label="Title" defaultValue={event.title} multiline variant="outlined" />
                                            }
                                        </FormControl><br /><br />
                                        <FormControl className="item-form" fullWidth>
                                            {
                                                (this.props.handleEditing) ?
                                                    <TextField className="item-form-textfield" label="Description" name="desc" defaultValue={event.desc} multiline variant="outlined" onChange={(event, index) => this.editingNote(event, index)} InputProps={{ readOnly: !this.props.handleEditing }} /> :
                                                    <TextField className="item-form-textfield" disabled label="Description" defaultValue={event.desc} multiline variant="outlined" />
                                            }
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
