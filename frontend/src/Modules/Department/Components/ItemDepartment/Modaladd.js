import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

const Modaladd = () => {
    const [modal, setModal] = useState(false);
    const [dataDepartment, setDataDepartment] = useState({});

    const handerOnchange = (event) => {
        setDataDepartment({ ...dataDepartment, [event.target.name]: event.target.value })
    };

    const addDepartment = (event) => {
        event.preventDefault();
    };

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>+ Add Department</Button>
            <Modal isOpen={modal} fade={false} toggle={toggle}>
                <ModalHeader toggle={toggle}>Them phong ban</ModalHeader>
                <ModalBody>
                    <Form onSubmit={addDepartment}>
                        <FormGroup>
                            <Label>Ten phong ban</Label>
                            <Input name='name' onChange={handerOnchange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Leader</Label>
                            <Input name='chooseleader' type='select' onChange={handerOnchange}>
                                <option value='leader'>nguoi dung 1</option>
                                <option value='leader2'>nguoi dung 2</option>
                                <option value='leader3'>nguoi dung 3</option>
                                <option value='leader4'>nguoi dung 4</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mo ta phong ban</Label>
                            <Input name='dsc' type='textarea' style={{ resize: 'vertical' }} onChange={handerOnchange} />
                        </FormGroup>
                        <Button color="primary" onClick={toggle} type="submit" >Create</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Modaladd;