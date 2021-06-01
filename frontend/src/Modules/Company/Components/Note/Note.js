import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Form } from '../../Shared';
import ModalAdd from './ModalAdd';
import CompanyService from '../../Shared/CompanyService';

export default class Note extends Form {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            note: []
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

    /*--------------------------------------------------*/

    addNote = async (item) => {
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
                                        <IconButton><MoreVertIcon /></IconButton>
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
