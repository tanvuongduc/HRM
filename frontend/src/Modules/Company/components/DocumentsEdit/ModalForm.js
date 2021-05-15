import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from 'reactstrap';

const ModalForm = ({ addDocument }) => {

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
        <div>
            <Button color="danger" style={{ float: 'right' }} onClick={toggle}>ADD</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form onSubmit={addData}>
                        <FormGroup>
                            <Label>TITLE</Label>
                            <Input type='text' name='title' onChange={handerOnchange} value={data.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label>DESCRIPTION</Label>
                            <Input type='textarea' name='description' onChange={handerOnchange} value={data.desc} />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label>File</Label>
                            <Input type='file' name='file' />
                        </FormGroup> */}
                        <Button color="primary" onClick={toggle} type="submit">Create</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default ModalForm;
