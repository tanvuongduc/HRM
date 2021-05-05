import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalEdit = (props) => {


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
                            <Input name='chooseleader' type='select' onChange={handerOnchange}>
                                <option value='leader'>nguoi dung 1</option>
                                <option value='leader2'>nguoi dung 2</option>
                                <option value='leader3'>nguoi dung 3</option>
                                <option value='leader4'>nguoi dung 4</option>
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

export default ModalEdit;