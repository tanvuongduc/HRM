import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, Input, Label } from 'reactstrap'
import Button from '@material-ui/core/Button'

const ModalAdd = ({ addDocument }) => {
    const [modal, setModal] = useState(false);
    const [data, setdata] = useState('');

    const handerOnchange = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    };

    const addData = (event) => {
        event.preventDefault();
        addDocument(data)
    };

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button variant="contained" color="primary" style={{ display: 'inline' }} onClick={toggle}>ADD</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create new document</ModalHeader>
                <ModalBody>
                    <Form onSubmit={addData}>
                        <Label>Enter title</Label>
                        <Input type='text' name='title' onChange={handerOnchange} value={data.title} />
                        <Label>Enter content</Label>
                        <Input type='textarea' name='description' onChange={handerOnchange} value={data.desc} /><br />
                        <Button variant="contained" color="primary" onClick={toggle} type="submit">Create</Button>{' '}
                        <Button variant="contained" color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}
export default ModalAdd;
