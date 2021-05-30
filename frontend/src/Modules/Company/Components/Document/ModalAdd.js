import { Modal, Button, FormControl, TextField } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react'

const getModalStyle = () => {
    return {
        top: '35%',
        left: '50%',
        width: '600px',
        padding: '30px',
        borderRadius: '4px',
        position: 'absolute',
        backgroundColor: 'white',
        transform: 'translate(-50%, -50%)'
    }
}
const getFormStyle = () => {
    return {
        textAlign: 'right'
    }
}
const getFormControlStyle = () => {
    return {
        paddingBottom: '20px'
    }
}

/*--------------------------------------------------*/

const ModalAdd = (props) => {
    const [modalStyle] = React.useState(getModalStyle);
    const [formStyle] = React.useState(getFormStyle);
    const [formControlStyle] = React.useState(getFormControlStyle);
    const [modal, setModal] = React.useState(false);
    const [document, setDocument] = React.useState({});

    const handleOnchange = (event) => {
        setDocument({ ...document, [event.target.name]: event.target.value })
    };

    const patchDocument = async (event) => {
        // event.preventDefault();
        event.target.reset();

        const item = {};
        item.title = document.title;
        item.desc = document.desc;
        props.add(item);

        setModal(!modal)
    };

    const handleModal = () => {
        setModal(!modal)
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleModal} startIcon={<AddCircleIcon />}>Document</Button>
            <Modal open={modal} onClose={handleModal} >
                <div style={modalStyle}>
                    <h4>Create a new document</h4><hr />
                    <form style={formStyle} onSubmit={patchDocument}>
                        <FormControl style={formControlStyle} fullWidth>
                            <TextField label="Enter title" helperText="Some important text" name="title" onChange={handleOnchange} required />
                        </FormControl>
                        <FormControl style={formControlStyle} fullWidth>
                            <TextField label="Enter describe" helperText="Some important text" name="desc" onChange={handleOnchange} required />
                        </FormControl>
                        <Button variant="contained" color="primary" type="submit" startIcon={<SaveIcon />}>Save</Button>{' '}
                        <Button variant="contained" color="secondary" onClick={handleModal} startIcon={<CancelIcon />}>Cancel</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalAdd;
