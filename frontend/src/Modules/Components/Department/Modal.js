import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalExample = (props) => {

    const [modal, setModal] = useState(false);
    const [data, setdata] = useState('')
    const handerOnchange = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const addDepartment = (event) => {
        event.preventDefault();
        console.log(data, 'gggggggg')
    }
    const {
        buttonLabel,
        className
    } = props;

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}+ Add</Button>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Them phong ban</ModalHeader>
                <ModalBody>
                    <Form onSubmit={addDepartment}>
                        <FormGroup>
                            <Label>Ten phong ban</Label>
                            <Input name='name' onChange={handerOnchange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Leader</Label>
                            <Input type='select' onChange={handerOnchange}>
                                <option name='leader'>nguoi dung 1</option>
                                <option name='leader2'>nguoi dung 2</option>
                                <option name='leader3'>nguoi dung 3</option>
                                <option name='leader4'>nguoi dung 4</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mo ta phong ban</Label>
                            <Input name='dsc' type='textarea' onChange={handerOnchange} />
                        </FormGroup>
                        <Button color="primary" onClick={toggle} type="submit" >Create</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalExample;
