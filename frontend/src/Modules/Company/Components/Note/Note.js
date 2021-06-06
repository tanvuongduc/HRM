import React from 'react'
import ModalAdd from './ModalAdd';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CompanyService from '../../Shared/CompanyService';
import { ModalConfirm, Form } from '../../Shared/';

export default class Note extends Form {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            company: {},
            note: [],
            notiMessage: '',
            index_delete: '',
            index: null
        }
    };

    getNote() {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    note: res.data.notes
                })
                this.setState({
                    company: res.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    addNote = (item) => {
        this.state.note.push(item)
        this.setState({
            note: this.state.note
        });

        CompanyService.finishNoteResult(this.state.note, this.state.company)
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    /*--------------------------------------------------*/

    handleClick = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    handleEdit = () => {
        this.setState({ anchorEl: null })
    };

    /*--------------------------------------------------*/

    handleDelete = (event) => {
        console.log(event.target.value)
        this.state.note.map((e, i) => {
            this.setState({ index: i })
        })
        console.log(this.state.index, 'hihiiiokkkkk')

        // this.setState({
        //     index_delete: event.target.value,
        //     notiMessage: 'Are you sure you want to delete this note ?',
        //     anchorEl: null
        // })
    };

    // answer = async (event) => {
    //     this.setState({ notiMessage: '' })
    //     if (event) {
    //         this.state.note.map((index) => {
    //             this.state.note.splice(index, this.state.index_delete)
    //             this.setState({ note: this.state.note })

    //         })
    //         // await CompanyService.finishNoteResult(this.state.note, this.state.company)
    //         //     .catch((error) => {
    //         //         console.error('Error:', error);
    //         //     })
    //     } else null
    // };

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
                                    <div className="item-content"><b>{event.title}</b></div>
                                    <div className="item-menuIcon">
                                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => this.handleClick(e)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                                            <MenuItem onClick={this.handleEdit}><EditIcon />&emsp;Edit Note</MenuItem>
                                            <MenuItem value={index} onClick={(i) => this.handleDelete(i)}><DeleteIcon />&emsp;Delete Note</MenuItem>
                                            <ModalConfirm message={this.state.notiMessage} answer={(event) => this.answer(event)} />
                                        </Menu>
                                    </div>
                                    <div className="item-content">
                                        <p><b>Description: </b>{event.desc}</p>
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
